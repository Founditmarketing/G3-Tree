import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeTreeImage = async (base64Image: string, mimeType: string): Promise<AnalysisResult> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: mimeType,
              data: base64Image
            }
          },
          {
            text: `Analyze this tree image as a professional arborist. 
            Identify the likely species. 
            Estimate a health score from 0 to 100 based on visible signs (leaves, bark, posture).
            List visible issues (e.g., dead branches, rot, pests).
            Provide recommendations (e.g., Pruning, Removal, Fertilization).
            Estimate urgency.`
          }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            species: { type: Type.STRING },
            healthScore: { type: Type.NUMBER },
            healthStatus: { type: Type.STRING },
            issues: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            estimatedUrgency: {
              type: Type.STRING,
              enum: ['Low', 'Medium', 'Critical']
            }
          },
          required: ['species', 'healthScore', 'healthStatus', 'issues', 'recommendations', 'estimatedUrgency']
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    // Robust cleanup: removes ```json, ```, and trims whitespace/newlines
    const cleanJson = text.replace(/```json\s*|```\s*/g, '').trim();
    
    return JSON.parse(cleanJson) as AnalysisResult;
  } catch (error) {
    console.error("Analysis failed:", error);
    // Fallback mock data in case of API failure or rate limits during demo
    return {
      species: "Data Corrupted / Signal Lost",
      healthScore: 0,
      healthStatus: "Error",
      issues: ["Connection Failure", "Please Retry Scan"],
      recommendations: ["Manual Inspection Required"],
      estimatedUrgency: "Medium"
    };
  }
};

export const chatWithArborist = async (message: string, history: {role: string, content: string}[]): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "You are the G3 Field Commander, a senior arborist for G3 Tree Service. You speak in a professional, slightly tactical/military tone (using terms like 'protocol', 'structural integrity', 'deployed'). You are helpful but concise. You recommend G3 services (Pruning, Removal, PHC) where appropriate. Keep answers under 80 words.",
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.content }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Communication interference. Please repeat.";
  } catch (error) {
    console.error("Chat failed:", error);
    return "Signal lost. Field unit offline. Please call dispatch directly.";
  }
};