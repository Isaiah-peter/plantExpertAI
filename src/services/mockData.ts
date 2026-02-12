import { PlantDiseaseResponse } from './api';

export const MOCK_RESULT: PlantDiseaseResponse = {
  disease: "Rusty Leaf Disease (Puccinia spp.)",
  scientific_name: "Puccinia spp.",
  description: "Rusty Leaf Disease is caused by fungal pathogens of the Puccinia genus. It appears as reddish-brown or orange powdery spots on the underside of leaves, commonly seen in warm, humid climates.",
  prevention_tips: [
    "Ensure Proper Spacing: Maintain adequate spacing to improve air circulation.",
    "Regular Monitoring: Inspect plants frequently for early signs of rust.",
    "Use Resistant Varieties: Choose rust-resistant plant varieties."
  ],
  treatment_methods: [
    "Apply Fungicides: Use sulfur or copper-based fungicides.",
    "Remove Affected Leaves: Prune and destroy infected leaves immediately."
  ]
};