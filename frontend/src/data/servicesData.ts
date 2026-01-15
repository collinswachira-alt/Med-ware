export interface Service {
  id: string;
  title: string;
  slug: string;
  summary: string;
  featuredImage: string;
  markdownContent: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Maternity Care',
    slug: 'maternity-care',
    summary: 'Comprehensive prenatal, natal, and postnatal care for expecting mothers and newborns.',
    featuredImage: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1768056209/maternity-care_example.jpg',
    markdownContent: `# Maternity Care at Mimosa Cottage Hospital

## Overview
We provide world-class maternity services designed to ensure the health and safety of both mother and baby throughout the pregnancy journey.

## Our Services
- **Prenatal Care**: Regular check-ups, ultrasounds, and screening tests to monitor fetal development
- **Labor & Delivery**: 24/7 obstetric care with modern delivery facilities
- **Postnatal Care**: Support for recovery and newborn care guidance
- **High-Risk Pregnancy Management**: Specialized care for complex pregnancies

## Facilities
- State-of-the-art delivery suites
- Neonatal Intensive Care Unit (NICU)
- Lactation consultants
- Comfortable recovery rooms

## Our Team
Our experienced obstetricians and midwives are dedicated to providing compassionate, evidence-based care at every stage of your pregnancy.

## When to Visit
- If you are pregnant or planning pregnancy
- For routine prenatal appointments
- For high-risk pregnancy monitoring
- For postpartum follow-up care

**Contact us** to schedule your maternity consultation today.`,
  },
  {
    id: '2',
    title: 'Child Wellness',
    slug: 'child-wellness',
    summary: 'Pediatric care focused on the healthy growth and development of children from infancy through adolescence.',
    featuredImage: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1768056209/child-wellness_example.jpg',
    markdownContent: `# Child Wellness at Mimosa Cottage Hospital

## Overview
We are committed to supporting your child's health and well-being with compassionate, comprehensive pediatric care.

## Our Services
- **Well-Child Visits**: Growth monitoring and developmental assessments
- **Immunizations**: Complete vaccination schedules and catch-up vaccines
- **Acute Care**: Treatment of common childhood illnesses
- **Chronic Disease Management**: Ongoing care for conditions like asthma and allergies
- **Developmental Screening**: Early identification of developmental delays

## Why Choose Us
- Experienced pediatricians specializing in child development
- Child-friendly environment to reduce anxiety
- Comprehensive health education for parents
- Coordination with schools and other healthcare providers

## Services Include
- Routine check-ups and vaccinations
- Treatment of ear infections, colds, and flu
- Asthma and allergy management
- Growth and development tracking
- Nutritional guidance

**Schedule your child's wellness visit** to ensure they're thriving at every stage of life.`,
  },
  {
    id: '3',
    title: 'Family Planning',
    slug: 'family-planning',
    summary: 'Confidential family planning services to help you make informed reproductive health decisions.',
    featuredImage: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1768056209/family-planning_example.jpg',
    markdownContent: `# Family Planning at Mimosa Cottage Hospital

## Overview
We provide confidential, non-judgmental family planning services to help you achieve your reproductive goals.

## Contraceptive Options
- **Barrier Methods**: Condoms and diaphragms
- **Hormonal Methods**: Oral contraceptives, patches, and injections
- **Long-Acting Methods**: IUDs and implants
- **Permanent Methods**: Tubal ligation and vasectomy

## Services Offered
- Comprehensive reproductive health counseling
- STI screening and testing
- Contraceptive method selection assistance
- Fertility assessment
- Pregnancy planning consultations
- Emergency contraception

## Our Approach
- Evidence-based recommendations tailored to your needs
- Thorough counseling on all available options
- Regular follow-up care
- Complete confidentiality and respect

## Who Should Visit
- Anyone seeking contraceptive advice
- Couples planning pregnancy
- Those concerned about STI exposure
- Individuals wanting reproductive health education

**Book a consultation** with our experienced family planning specialists.`,
  },
  {
    id: '4',
    title: 'Diagnosis & Lab Tests',
    slug: 'diagnosis-lab-tests',
    summary: 'Accurate laboratory testing and diagnostic services using state-of-the-art equipment and technology.',
    featuredImage: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1768056209/lab-tests_example.jpg',
    markdownContent: `# Diagnosis & Lab Tests at Mimosa Cottage Hospital

## Overview
We offer comprehensive laboratory and diagnostic services with rapid, accurate results to support your healthcare decisions.

## Available Tests
- **Blood Tests**: Complete blood counts, chemistry panels, lipid profiles
- **Microbiology**: Bacterial and viral cultures, sensitivity testing
- **Pathology**: Tissue analysis and biopsy interpretation
- **Imaging**: X-ray, ultrasound, and advanced diagnostic imaging
- **Specialized Tests**: Hormone levels, tumor markers, genetic testing

## Quality Assurance
- ISO-certified laboratory
- Trained and certified technicians
- Latest diagnostic equipment
- Rigorous quality control measures
- Rapid turnaround times

## Online Result Access
Access your test results securely through our patient portal with clear explanations from our medical team.

## Test Preparation
Our staff provides clear instructions for test preparation to ensure accurate results.

## Home Collection Service
We offer convenient blood collection at your home for select tests.

**Schedule your diagnostic tests** with confidence in Mimosa Cottage Hospital.`,
  },
  {
    id: '5',
    title: 'Ambulance & Referral',
    slug: 'ambulance-referral',
    summary: 'Professional ambulance services and coordinated referrals to specialized healthcare facilities.',
    featuredImage: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1768056209/ambulance_example.jpg',
    markdownContent: `# Ambulance & Referral Services at Mimosa Cottage Hospital

## Overview
We provide reliable ambulance services and seamless medical referrals to ensure continuity of care.

## Ambulance Services
- **24/7 Availability**: Emergency ambulance dispatch around the clock
- **Trained Paramedics**: Certified emergency medical personnel
- **Modern Fleet**: Well-equipped ambulances with life-support equipment
- **GPS Tracking**: Real-time ambulance tracking and updates
- **Multiple Response Options**: Basic life support, advanced life support, and patient transfer

## When to Call Our Ambulance
- Chest pain or difficulty breathing
- Severe injuries from accidents
- Sudden loss of consciousness
- Uncontrolled bleeding
- Any medical emergency requiring immediate transport

## Referral Coordination
- Partnerships with specialized hospitals and clinics
- Coordinated patient handover
- Complete medical records transfer
- Insurance authorization assistance
- Follow-up care coordination

## How to Request
Call our emergency number or use our mobile app to request ambulance services.

**Trust us to get you to care quickly and safely.**`,
  },
  {
    id: '6',
    title: 'Emergency Care',
    slug: 'emergency-care',
    summary: 'Round-the-clock emergency department with trauma care, resuscitation, and acute medical management.',
    featuredImage: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1768056209/emergency-care_example.jpg',
    markdownContent: `# Emergency Care at Mimosa Cottage Hospital

## Overview
Our Emergency Department operates 24/7 to provide immediate care for acute medical and surgical emergencies.

## Emergency Services
- **Trauma Care**: Treatment of injuries from accidents and falls
- **Cardiac Emergencies**: Chest pain evaluation and acute cardiac care
- **Respiratory Emergencies**: Breathing difficulty and airway management
- **Neurological Emergencies**: Stroke and head injury care
- **Acute Abdominal Emergencies**: Assessment and stabilization
- **Orthopedic Emergencies**: Fracture and joint injury care

## Our Capabilities
- Fully equipped resuscitation bays
- Continuous cardiac monitoring
- Advanced airway management
- Rapid imaging services (X-ray, ultrasound, CT)
- On-site surgical capability
- ICU admission for critical cases

## Triage System
We use a color-coded triage system to prioritize patients based on severity.

## Waiting Times
Our efficient system minimizes waiting times for urgent cases.

## Insurance & Payment
We work with most insurance providers and offer flexible payment options.

**In an emergency, call 999 or go to your nearest emergency department.**`,
  },
  {
    id: '7',
    title: 'STIs and HIV/AIDS',
    slug: 'stis-hiv-aids',
    summary: 'Confidential testing, treatment, and management of sexually transmitted infections and HIV/AIDS.',
    featuredImage: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1768056209/sti-hiv_example.jpg',
    markdownContent: `# STIs and HIV/AIDS Services at Mimosa Cottage Hospital

## Overview
We provide confidential, judgment-free testing, treatment, and long-term management of STIs and HIV/AIDS.

## Services Offered
- **STI Testing**: Rapid and comprehensive screening for common STIs
- **HIV Testing**: Confidential HIV testing with rapid results
- **Post-Exposure Prophylaxis (PEP)**: Emergency treatment after potential HIV exposure
- **Pre-Exposure Prophylaxis (PrEP)**: Prevention for high-risk individuals
- **Antiretroviral Therapy (ART)**: Evidence-based HIV treatment
- **Counseling & Support**: Professional counseling and peer support groups

## Common STIs Treated
- Gonorrhea
- Chlamydia
- Syphilis
- Herpes
- HPV and genital warts
- Trichomoniasis

## HIV/AIDS Management
- CD4 count and viral load monitoring
- Opportunistic infection prevention
- Mental health support
- Nutritional counseling
- Drug adherence support

## Confidentiality
Complete confidentiality is guaranteed for all patients.

## Contact Tracing
We assist with partner notification if you consent.

**Get tested today. Knowledge is power in preventing STIs and HIV.**`,
  },
  {
    id: '8',
    title: 'Breast Cancer Screening',
    slug: 'breast-cancer-screening',
    summary: 'Early detection and comprehensive breast health services including screening, imaging, and biopsy.',
    featuredImage: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1768056209/breast-cancer_example.jpg',
    markdownContent: `# Breast Cancer Screening at Mimosa Cottage Hospital

## Overview
Early detection saves lives. We offer comprehensive breast cancer screening to identify abnormalities at the earliest stages.

## Screening Methods
- **Clinical Breast Exam**: Thorough examination by trained healthcare professionals
- **Mammography**: Digital mammography for clear imaging
- **Ultrasound**: High-resolution ultrasound for dense breast tissue
- **Advanced Imaging**: MRI for high-risk patients

## Risk Assessment
- Family history evaluation
- Genetic counseling and BRCA testing
- Personalized screening recommendations

## What to Expect
- Comfortable, private screening environment
- Experienced breast health specialists
- Quick, painless procedures
- Rapid result turnaround

## Screening Guidelines
- Women 40+: Annual mammography
- High-risk women: Earlier and more frequent screening
- Women under 40: Clinical exams and risk assessment

## Abnormality Follow-up
If an abnormality is detected, we coordinate immediate specialist consultation and biopsy if needed.

## Support Services
- Counseling for abnormal results
- Support groups for breast cancer survivors
- Reconstructive surgery consultations

**Schedule your breast cancer screening today.**`,
  },
  {
    id: '9',
    title: 'Cervical Cancer Screening',
    slug: 'cervical-cancer-screening',
    summary: 'Preventive cervical cancer screening services including Pap tests, HPV testing, and vaccination.',
    featuredImage: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1768056209/cervical-cancer_example.jpg',
    markdownContent: `# Cervical Cancer Screening at Mimosa Cottage Hospital

## Overview
Cervical cancer is highly preventable through regular screening. We provide comprehensive cervical health services.

## Screening Services
- **Pap Test (Cervical Cytology)**: Standard cervical cancer screening
- **HPV Testing**: Human papillomavirus detection
- **Liquid-Based Cytology**: Advanced specimen collection
- **Colposcopy**: Magnified visualization of cervical tissue
- **Tissue Biopsy**: When abnormalities are detected

## HPV Vaccination
- Preventive vaccination for women 9-45 years
- Protection against high-risk HPV strains
- Coordination with vaccination schedules

## Screening Guidelines
- Sexually active women: Begin screening at 25 years
- Regular screening: Every 3-5 years
- Post-treatment monitoring for abnormalities

## What to Expect
- Quick, minimally invasive procedure
- Experienced gynecologists
- Private, comfortable setting
- Same-day results for some tests

## Abnormal Result Management
- Clear communication about results
- Specialist consultations for abnormalities
- Treatment options discussion
- Follow-up scheduling

**Take control of your cervical health. Book your screening today.**`,
  },
  {
    id: '10',
    title: 'Immunizations',
    slug: 'immunizations',
    summary: 'Complete immunization services for infants, children, adolescents, and adults with vaccine counseling.',
    featuredImage: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1768056209/immunizations_example.jpg',
    markdownContent: `# Immunizations at Mimosa Cottage Hospital

## Overview
Vaccinations are one of the most effective public health measures. We offer comprehensive immunization services for all ages.

## Vaccination Programs
- **Childhood Vaccines**: Complete schedule from birth through 18 years
- **Adolescent Vaccines**: HPV, meningococcal, and booster shots
- **Adult Vaccines**: Flu, pneumonia, shingles, and travel vaccines
- **Travel Vaccines**: Protection for destinations worldwide
- **Occupational Vaccines**: For healthcare workers and other professions

## Vaccines Available
- DPT (Diphtheria, Pertussis, Tetanus)
- Polio
- Measles, Mumps, Rubella (MMR)
- Varicella (Chickenpox)
- Hepatitis A & B
- Influenza (Flu)
- Pneumococcal
- Meningococcal
- HPV
- Shingles (Herpes Zoster)
- COVID-19
- Yellow Fever (travel)

## Pre-Vaccination Counseling
- Detailed information about each vaccine
- Discussion of benefits and risks
- Screening for contraindications
- Answers to your questions

## After Vaccination
- Side effect monitoring
- Written guidance on expected reactions
- Appointment reminders for follow-up doses
- Vaccination record documentation

**Keep yourself and your loved ones protected. Schedule your vaccines today.**`,
  },
  {
    id: '11',
    title: 'General Checkups',
    slug: 'general-checkups',
    summary: 'Comprehensive physical examinations and preventive health screening for all ages.',
    featuredImage: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1768056209/general-checkups_example.jpg',
    markdownContent: `# General Checkups at Mimosa Cottage Hospital

## Overview
Regular health checkups are essential for maintaining good health and detecting problems early.

## What's Included in a General Checkup
- **Medical History**: Detailed health and family history review
- **Vital Signs**: Blood pressure, heart rate, temperature, respiratory rate
- **Physical Examination**: Head-to-toe assessment
- **Organ Systems Review**: Heart, lungs, abdomen, neurological function
- **Health Counseling**: Lifestyle, nutrition, and exercise guidance
- **Risk Assessment**: Personalized disease prevention recommendations

## Age-Specific Screening
- **Young Adults (18-40)**: Baseline health parameters, lifestyle assessment
- **Middle-Aged (40-60)**: Cardiovascular, cancer, and metabolic screening
- **Seniors (60+)**: Comprehensive geriatric assessment

## Common Tests
- Blood pressure monitoring
- Weight and BMI assessment
- Blood work as indicated
- Cholesterol screening
- Diabetes screening
- Cancer screening recommendations

## Health Recommendations
Based on your checkup, we provide personalized recommendations for:
- Vaccinations
- Cancer screening
- Mental health support
- Fitness and nutrition
- Medication review

## Benefits of Regular Checkups
- Early disease detection
- Chronic disease management
- Health goal achievement
- Peace of mind

**Schedule your general checkup and invest in your health.**`,
  },
  {
    id: '12',
    title: 'In & Out Patient Services',
    slug: 'in-out-patient-services',
    summary: 'Inpatient hospital care and outpatient treatment services with comfortable facilities and expert medical teams.',
    featuredImage: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1768056209/inpatient_example.jpg',
    markdownContent: `# In & Out Patient Services at Mimosa Cottage Hospital

## Overview
We provide comprehensive inpatient and outpatient services to meet all your healthcare needs.

## Inpatient Services
- **General Wards**: Comfortable, well-staffed nursing care
- **Private Rooms**: For patients preferring privacy
- **Semi-Private Rooms**: Cost-effective alternative with excellent care
- **ICU Beds**: Intensive care for critical patients
- **High-Dependency Unit**: For patients needing close monitoring

## Inpatient Amenities
- 24/7 nursing care
- Daily physician visits
- Modern medical equipment
- Family visitation areas
- Patient entertainment (TV, Wi-Fi)
- Nutritious meals and snacks
- Medication management

## Outpatient Services
- **Specialist Clinics**: Cardiology, orthopedics, dermatology, and more
- **Diagnostic Services**: Lab work and imaging on-site
- **Minor Surgery**: Day surgical procedures
- **Wound Care**: Dressing changes and post-operative care
- **Physical Therapy**: Rehabilitation and physiotherapy
- **Mental Health Services**: Counseling and psychological support

## Appointment Booking
Easy online and phone booking for outpatient appointments.

## Insurance & Billing
We accept most insurance plans and offer transparent pricing.

## Admission Process
- Quick and efficient admission
- Clear explanation of procedures
- Family support and accommodation information

**Whether you need inpatient or outpatient care, we're here for you.**`,
  },
  {
    id: '13',
    title: 'Blood Transfusion',
    slug: 'blood-transfusion',
    summary: 'Blood bank services including donation, testing, storage, and transfusion of safe, screened blood products.',
    featuredImage: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1768056209/blood-transfusion_example.jpg',
    markdownContent: `# Blood Transfusion Services at Mimosa Cottage Hospital

## Overview
Our blood bank ensures a safe and reliable blood supply for patients in need.

## Blood Donation
- **Regular Donation**: Healthy individuals can donate every 3-4 months
- **Plasma Donation**: Separate collection for plasma products
- **Platelet Donation**: For patients with low platelet counts
- **Walk-In Donors**: No appointment necessary
- **Mobile Blood Drives**: Community outreach programs

## Donation Requirements
- Age 18-65 years
- Weight minimum 50 kg
- Good general health
- No recent infections or vaccinations
- Free and confidential screening

## Blood Types
We maintain supplies of all blood types (O+, O-, A+, A-, B+, B-, AB+, AB-).

## Transfusion Services
- **Emergency Transfusions**: Rapid blood provision for trauma cases
- **Planned Transfusions**: For surgical patients and chronic conditions
- **Special Products**: Cross-matched and specially prepared products
- **Transfusion Monitoring**: Safe administration with vital sign monitoring

## Blood Safety
- Rigorous donor screening
- Multiple disease testing
- Pathogen inactivation
- Quality control at every step
- Complete traceability

## Benefits of Blood Donation
- Help save lives
- Free health screening
- Refreshments provided
- Community recognition program

## Become a Donor
Register as a blood donor and make a difference in your community.

**Donate blood. Save lives. Be a hero.**`,
  },
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

// Helper function to get related services (exclude current service)
export function getRelatedServices(currentSlug: string, limit: number = 4): Service[] {
  return services
    .filter((service) => service.slug !== currentSlug)
    .slice(0, limit);
}
