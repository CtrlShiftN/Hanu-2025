const doctorData = [
    { 
        id: 1,
        name: 'Dr. Marcus Grayson',
        position: "Assistant Professor", 
        desc: "Fever and flu specialists are dedicated healthcare professionals who play a vital role in safeguarding public health and helping patients recover from infectious illnesses with compassion, expertise, and evidence-based care.",
        expert: [
            {symptom: "Fever", icon: require('../assets/hospital/fever.png')}, 
            {symptom: "Flu", icon: require('../assets/hospital/flu.png')},
        ],
        image: require('../assets/hospital/doctor_1.png') 
    },
     
    { id: 2,
     name: 'Dr. Emily Hayes',
     position: "Assistant Professor", 
     desc: "When experiencing both a toothache and headache, it's crucial to seek professional medical or dental evaluation to determine the underlying cause and receive appropriate treatment. A dentist can perform a thorough examination, including dental X-rays if necessary, to identify any dental issues contributing to the toothache. They may recommend treatments such as fillings, root canals, extractions, or other interventions to address the dental problem.",
     expert: [
        {symptom: "Headache", icon: require('../assets/hospital/headache.png')}, 
        {symptom: "Toothache", icon: require('../assets/hospital/toothache.png')},
    ], 
     image: require('../assets/hospital/doctor_2.png')},
     
    { id: 3,
     name: 'Dr. Sophia Chen',
     position: "Assistant Professor", 
     desc: "Covid and nausea specialists are dedicated healthcare professionals who play a vital role in safeguarding public health and helping patients recover from infectious illnesses with compassion, expertise, and evidence-based care.",
     expert: [
        {symptom: "Nausea", icon: require('../assets/hospital/nausea.png')}, 
        {symptom: "Covid", icon: require('../assets/hospital/covid.png')},
    ], 
     image: require('../assets/hospital/doctor_3.png') },
];
export default doctorData;