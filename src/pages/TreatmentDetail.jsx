
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const treatmentData = {
  sciatica: {
    number: "01",
    title: "Sciatica",
    subtitle: "Understanding Sciatic Nerve Pain",
    intro:
      "Sciatica can cause pain that travels from the lower back towards the hip and leg. At MBS Health Solutions & Chiropractic, care focuses on understanding symptoms, movement, posture and overall wellness.",
    whatIs:
      "Sciatica describes pain or discomfort along the path of the sciatic nerve. It commonly involves the lower back, hip and leg and may sometimes be accompanied by tingling, numbness or weakness.",
    symptoms: [
      "Lower back pain",
      "Pain travelling into the hip or leg",
      "Tingling or numbness",
      "Muscle tightness",
      "Difficulty sitting or standing comfortably",
    ],
    approach:
      "The approach is personalized according to the individual's symptoms and condition. Chiropractic and therapeutic techniques may be combined with posture, movement and lifestyle guidance wherever clinically appropriate.",
    related: ["slip-disc", "back-pain", "cervical"],
    faq: [
      [
        "What is sciatica?",
        "Sciatica refers to pain or discomfort associated with the sciatic nerve, often involving the lower back, hip and leg.",
      ],
      [
        "Can sciatica be managed without surgery?",
        "Some cases may improve with conservative approaches. The appropriate management depends on the individual's condition and clinical assessment.",
      ],
      [
        "When should I seek professional help?",
        "Persistent, severe or worsening pain should be evaluated by an appropriate healthcare professional.",
      ],
    ],
  },

  "slip-disc": {
    number: "02",
    title: "Slip Disc",
    subtitle: "Support for Disc-Related Back Problems",
    intro:
      "Slip disc problems can affect movement, posture and everyday comfort. Personalized care can help address symptoms while considering the individual's overall condition.",
    whatIs:
      "A slipped or herniated disc occurs when the inner material of a spinal disc pushes through its outer layer. Depending on the location, it may affect the back or nearby nerves.",
    symptoms: [
      "Back or neck pain",
      "Pain extending into an arm or leg",
      "Tingling or numbness",
      "Muscle weakness",
      "Pain during certain movements",
    ],
    approach:
      "Dr. Pawan Srivastava follows a personalized approach based on symptoms and functional concerns. Therapeutic techniques, posture guidance and lifestyle support may be considered where appropriate.",
    related: ["sciatica", "back-pain", "cervical"],
    faq: [
      [
        "What is a slip disc?",
        "A slip disc generally refers to a spinal disc that has bulged or herniated and may affect nearby structures or nerves.",
      ],
      [
        "Does every slip disc require surgery?",
        "No. The appropriate management depends on the condition, symptoms and clinical findings.",
      ],
      [
        "Can posture affect back problems?",
        "Poor or prolonged posture may contribute to mechanical stress and discomfort in some individuals.",
      ],
    ],
  },

  "back-pain": {
    number: "03",
    title: "Back Pain",
    subtitle: "Personalized Support for Better Back Health",
    intro:
      "Back pain can affect work, sleep, exercise and everyday movement. Our approach considers posture, mobility, lifestyle and individual symptoms.",
    whatIs:
      "Back pain can have many causes, including muscle strain, posture-related stress, spinal conditions, injuries and lifestyle factors.",
    symptoms: [
      "Lower back discomfort",
      "Back stiffness",
      "Pain during movement",
      "Muscle tightness",
      "Difficulty with daily activities",
    ],
    approach:
      "Care may include therapeutic techniques, movement guidance, posture awareness and lifestyle recommendations according to the individual's needs.",
    related: ["sciatica", "slip-disc", "cervical"],
    faq: [
      [
        "What can cause back pain?",
        "Back pain can have many possible causes including muscular strain, posture-related stress, injury and spinal conditions.",
      ],
      [
        "Can posture contribute to back discomfort?",
        "Long periods of poor or static posture may contribute to muscular and mechanical stress.",
      ],
      [
        "When should back pain be evaluated?",
        "Persistent, severe or worsening back pain should be evaluated by an appropriate healthcare professional.",
      ],
    ],
  },

  "frozen-shoulder": {
    number: "04",
    title: "Frozen Shoulder",
    subtitle: "Support for Shoulder Pain and Restricted Movement",
    intro:
      "Frozen shoulder can make reaching, dressing, lifting and other everyday movements difficult. Personalized care focuses on mobility, comfort and functional movement.",
    whatIs:
      "Frozen shoulder, also called adhesive capsulitis, is associated with pain and stiffness of the shoulder joint and reduced range of movement.",
    symptoms: [
      "Shoulder pain",
      "Shoulder stiffness",
      "Difficulty reaching overhead",
      "Pain while sleeping",
      "Restricted arm movement",
    ],
    approach:
      "Treatment is personalized according to symptoms and mobility. Therapeutic techniques, movement guidance and lifestyle support may be considered where appropriate.",
    related: ["cervical", "knee-pain", "back-pain"],
    faq: [
      [
        "What is frozen shoulder?",
        "Frozen shoulder is associated with shoulder pain, stiffness and restricted movement.",
      ],
      [
        "Can frozen shoulder affect daily activities?",
        "Yes. Restricted movement may make reaching, dressing, lifting and sleeping more difficult.",
      ],
      [
        "Is movement important?",
        "Appropriate movement and rehabilitation can be useful, but exercises should be suitable for the individual's condition.",
      ],
    ],
  },

  "knee-pain": {
    number: "05",
    title: "Knee Pain",
    subtitle: "Support for Knee Comfort and Mobility",
    intro:
      "Knee pain can affect walking, stairs, exercise and daily activities. Our approach considers movement, lifestyle and individual symptoms.",
    whatIs:
      "Knee pain may occur due to injury, overuse, joint-related conditions, muscular factors or other underlying problems.",
    symptoms: [
      "Pain while walking",
      "Pain while climbing stairs",
      "Knee stiffness",
      "Swelling or discomfort",
      "Reduced mobility",
    ],
    approach:
      "Depending on the individual, care may include therapeutic techniques, movement guidance, lifestyle recommendations and wellness support.",
    related: ["back-pain", "sciatica", "frozen-shoulder"],
    faq: [
      [
        "What can cause knee pain?",
        "Knee pain may have several causes including injury, overuse, joint conditions and movement-related factors.",
      ],
      [
        "Can knee pain affect walking?",
        "Yes. Depending on severity and cause, knee pain may affect walking and climbing stairs.",
      ],
      [
        "Should persistent knee pain be evaluated?",
        "Persistent or worsening knee pain should be assessed by an appropriate healthcare professional.",
      ],
    ],
  },

  cervical: {
    number: "06",
    title: "Cervical",
    subtitle: "Support for Neck Pain and Cervical Problems",
    intro:
      "Cervical problems can cause neck discomfort, stiffness and sometimes symptoms around the shoulders or arms. Posture and movement are important considerations.",
    whatIs:
      "The cervical spine is the neck region of the spine. Problems affecting this area can cause local pain and stiffness and, in some cases, symptoms extending towards the shoulders or arms.",
    symptoms: [
      "Neck pain",
      "Neck stiffness",
      "Shoulder discomfort",
      "Headache associated with neck tension",
      "Arm discomfort or tingling",
    ],
    approach:
      "Dr. Pawan Srivastava takes a personalized approach that may include therapeutic care, posture guidance and lifestyle recommendations depending on the individual's symptoms.",
    related: ["headache", "migraine-pain", "back-pain"],
    faq: [
      [
        "What are common cervical symptoms?",
        "Neck pain, stiffness, shoulder discomfort and sometimes arm-related symptoms may occur.",
      ],
      [
        "Can prolonged screen use affect the neck?",
        "Long periods of static posture may contribute to neck and shoulder discomfort in some individuals.",
      ],
      [
        "Can cervical problems be associated with headaches?",
        "Neck tension can be associated with some headaches, although headaches can have many different causes.",
      ],
    ],
  },

  "navel-alignment": {
    number: "07",
    title: "Navel Alignment",
    subtitle: "A Traditional Complementary Wellness Approach",
    intro:
      "Navel alignment is a traditional complementary wellness practice that some people seek as part of a holistic approach to wellbeing.",
    whatIs:
      "Navel alignment is considered a complementary wellness practice. Evidence for specific medical claims associated with this practice is limited, and it should not replace appropriate medical diagnosis or treatment.",
    symptoms: [
      "General discomfort",
      "Digestive discomfort",
      "Feeling of bodily imbalance",
      "Postural discomfort",
      "General wellness concerns",
    ],
    approach:
      "Complementary wellness practices are considered according to individual needs. Persistent, severe or unexplained symptoms should be evaluated by an appropriate healthcare professional.",
    related: ["back-pain", "knee-pain", "cervical"],
    faq: [
      [
        "What is navel alignment?",
        "Navel alignment is a traditional complementary wellness practice and should not be considered a replacement for medical treatment.",
      ],
      [
        "Can it replace medical treatment?",
        "No. Complementary practices should not replace appropriate medical diagnosis or treatment.",
      ],
    ],
  },

  "migraine-pain": {
    number: "08",
    title: "Migraine Pain",
    subtitle: "Holistic Support for Migraine-Related Concerns",
    intro:
      "Migraine can affect daily life through recurring headache attacks and associated symptoms. Lifestyle and overall wellness may be important considerations.",
    whatIs:
      "Migraine is a neurological condition that can cause recurring headache attacks and may be associated with nausea or sensitivity to light and sound.",
    symptoms: [
      "Moderate to severe headache",
      "Sensitivity to light",
      "Sensitivity to sound",
      "Nausea",
      "Recurring headache episodes",
    ],
    approach:
      "Holistic wellness support may include lifestyle guidance, relaxation, posture awareness and complementary therapeutic approaches where appropriate. Persistent or severe headaches require appropriate medical evaluation.",
    related: ["headache", "cervical", "back-pain"],
    faq: [
      [
        "What is migraine?",
        "Migraine is a neurological condition that can cause recurring headache attacks and other symptoms.",
      ],
      [
        "Can lifestyle affect migraine?",
        "Sleep, stress, hydration and individual triggers can influence migraine symptoms for some people.",
      ],
      [
        "When should headaches be evaluated?",
        "New, sudden, severe or significantly changing headaches should be medically evaluated.",
      ],
    ],
  },

  headache: {
    number: "09",
    title: "Headache",
    subtitle: "Support for Headache-Related Concerns",
    intro:
      "Headaches can have many different causes. Understanding lifestyle, posture, stress and individual patterns can be an important part of overall wellness.",
    whatIs:
      "A headache is pain or discomfort occurring in the head, scalp or neck region. Different types of headaches have different causes.",
    symptoms: [
      "Head pain or pressure",
      "Neck and shoulder tension",
      "Recurring headaches",
      "Sensitivity to light or sound",
      "Discomfort associated with posture",
    ],
    approach:
      "Where appropriate, holistic support may include posture awareness, relaxation, lifestyle guidance and complementary therapeutic techniques.",
    related: ["migraine-pain", "cervical", "back-pain"],
    faq: [
      [
        "What can cause headaches?",
        "Headaches can have many causes including tension, migraine, dehydration, sleep issues, posture and medical conditions.",
      ],
      [
        "Can neck tension be related to headaches?",
        "Neck and shoulder tension can be associated with some types of headaches.",
      ],
      [
        "Should frequent headaches be evaluated?",
        "Frequent, severe, new or changing headaches should be discussed with an appropriate healthcare professional.",
      ],
    ],
  },

  "tmj-alignment": {
    number: "10",
    title: "TMJ Alignment",
    subtitle: "Support for Jaw and TMJ-Related Discomfort",
    intro:
      "TMJ-related problems can affect jaw movement, chewing and everyday comfort. Our approach focuses on understanding symptoms and supporting appropriate care.",
    whatIs:
      "The temporomandibular joints connect the jawbone to the skull. Problems involving the joints or surrounding muscles may cause jaw pain, stiffness or clicking.",
    symptoms: [
      "Jaw pain",
      "Jaw clicking or popping",
      "Difficulty opening the mouth",
      "Facial discomfort",
      "Pain while chewing",
    ],
    approach:
      "Care is personalized according to symptoms and functional concerns. Therapeutic and wellness approaches may be considered where appropriate, alongside dental or medical evaluation when needed.",
    related: ["cervical", "headache", "migraine-pain"],
    faq: [
      [
        "What is TMJ?",
        "TMJ refers to the temporomandibular joint, which connects the jawbone with the skull.",
      ],
      [
        "What are common TMJ symptoms?",
        "Jaw pain, clicking, facial discomfort and restricted jaw movement can occur with TMJ-related problems.",
      ],
      [
        "Should persistent jaw pain be evaluated?",
        "Yes. Persistent pain or restricted movement should be assessed by an appropriate dental or healthcare professional.",
      ],
    ],
  },
};

const treatmentNames = {
  sciatica: "Sciatica",
  "slip-disc": "Slip Disc",
  "back-pain": "Back Pain",
  "frozen-shoulder": "Frozen Shoulder",
  "knee-pain": "Knee Pain",
  cervical: "Cervical",
  "navel-alignment": "Navel Alignment",
  "migraine-pain": "Migraine Pain",
  headache: "Headache",
  "tmj-alignment": "TMJ Alignment",
};

function TreatmentDetail() {
  const { slug } = useParams();
  const treatment = treatmentData[slug];
  const [openFaq, setOpenFaq] = useState(null);

  if (!treatment) {
    return (
      <main className="min-h-screen bg-[#FAF7F9] flex items-center justify-center px-5">
        <div className="text-center max-w-xl">
          <p className="text-[#AE2580] font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm mb-4">
            Treatment Not Found
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#252525] mb-5">
            We couldn't find this treatment.
          </h1>

          <p className="text-gray-600 mb-8 leading-7">
            Please return to the treatments page and select a treatment from
            the available options.
          </p>

          <Link
            to="/treatments"
            className="inline-flex items-center justify-center rounded-full bg-[#AE2580] px-7 py-3.5 text-white font-semibold hover:bg-[#8f1e69] transition"
          >
            View All Treatments
          </Link>
        </div>
      </main>
    );
  }

  const seoTitle = `${treatment.title} Treatment | MBS Health Solutions & Chiropractic`;

  const seoDescription = `${treatment.title} care and holistic wellness support at MBS Health Solutions & Chiropractic with Dr. Pawan Srivastava. Personalized care based on individual symptoms and needs.`;

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>

        <meta
          name="description"
          content={seoDescription}
        />

        <meta
          property="og:title"
          content={seoTitle}
        />

        <meta
          property="og:description"
          content={seoDescription}
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <main className="bg-[#FAF7F9] text-[#252525] overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute -top-32 -right-32 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#AE2580]/5" />

          <div className="absolute top-40 -left-40 w-64 sm:w-72 h-64 sm:h-72 rounded-full bg-[#AE2580]/5" />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-7 sm:pt-10 md:pt-14 pb-14 sm:pb-20 md:pb-28">

            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 mb-10 sm:mb-14 overflow-x-auto whitespace-nowrap">
              <Link
                to="/"
                className="hover:text-[#AE2580] transition"
              >
                Home
              </Link>

              <span>/</span>

              <Link
                to="/treatments"
                className="hover:text-[#AE2580] transition"
              >
                Treatments
              </Link>

              <span>/</span>

              <span className="text-[#252525] font-medium">
                {treatment.title}
              </span>
            </div>

            <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-20 items-end">

              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-7">
                  <span className="text-[#AE2580] font-bold text-sm tracking-[0.25em]">
                    {treatment.number}
                  </span>

                  <span className="h-px w-9 sm:w-14 bg-[#AE2580]" />

                  <span className="text-gray-500 text-[10px] sm:text-sm uppercase tracking-[0.14em] sm:tracking-[0.18em]">
                    MBS Health Solutions
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.98] md:leading-[0.95] tracking-tight max-w-4xl">
                  {treatment.title}
                </h1>

                <p className="mt-5 sm:mt-7 text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl leading-7 md:leading-relaxed">
                  {treatment.subtitle}
                </p>

                <p className="mt-5 sm:mt-7 text-gray-600 max-w-2xl leading-7 md:leading-8 text-base md:text-lg">
                  {treatment.intro}
                </p>

                <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    to="/appointment"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#AE2580] px-6 sm:px-7 py-3.5 text-white font-semibold hover:bg-[#8f1e69] transition"
                  >
                    Book an Appointment
                  </Link>

                  <a
                    href="tel:+918076569626"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 sm:px-7 py-3.5 font-semibold text-[#252525] hover:border-[#AE2580] hover:text-[#AE2580] transition"
                  >
                    Call Clinic
                  </a>
                </div>
              </div>

              <div className="hidden lg:flex justify-center">
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 rounded-full border border-[#AE2580]/20" />

                  <div className="absolute inset-7 rounded-full border border-[#AE2580]/25" />

                  <div className="absolute inset-14 rounded-full bg-[#AE2580] flex items-center justify-center">
                    <span className="text-white text-7xl font-bold">
                      {treatment.number}
                    </span>
                  </div>

                  <div className="absolute top-5 right-8 w-4 h-4 rounded-full bg-[#AE2580]" />

                  <div className="absolute bottom-10 left-3 w-3 h-3 rounded-full bg-[#AE2580]/50" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= TRUST STRIP ================= */}
        <section className="border-y border-[#AE2580]/10 bg-[#FAF7F9]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-7 sm:py-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">

              <div className="text-center sm:text-left">
                <p className="text-2xl font-bold text-[#252525]">
                  32 Years
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Experience in holistic health
                </p>
              </div>

              <div className="text-center sm:text-left sm:border-l sm:border-gray-200 sm:pl-8">
                <p className="text-2xl font-bold text-[#252525]">
                  Thousands of Patients
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Personalized care approach
                </p>
              </div>

              <div className="text-center sm:text-left sm:border-l sm:border-gray-200 sm:pl-8">
                <p className="text-2xl font-bold text-[#252525]">
                  Holistic Care
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Mind • Body • Soul
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= UNDERSTANDING ================= */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">

            <div className="grid lg:grid-cols-[280px_1fr] gap-8 md:gap-10 lg:gap-20">

              <div>
                <p className="text-[#AE2580] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  Understanding
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold mt-3 leading-tight">
                  What is {treatment.title}?
                </h2>
              </div>

              <div>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 max-w-3xl">
                  {treatment.whatIs}
                </p>

                <div className="mt-8 sm:mt-10 pt-7 sm:pt-8 border-t border-gray-200">

                  <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    You may also want to explore
                  </p>

                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {treatment.related.map((item) => (
                      <Link
                        key={item}
                        to={`/treatments/${item}`}
                        className="rounded-full border border-gray-200 bg-[#FAF7F9] px-4 sm:px-5 py-2.5 text-sm font-medium hover:border-[#AE2580] hover:text-[#AE2580] transition"
                      >
                        {treatmentNames[item]}
                      </Link>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SYMPTOMS ================= */}
        <section className="bg-[#FAF7F9]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">

            <div className="max-w-2xl mb-10 sm:mb-14">
              <p className="text-[#AE2580] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                Common Concerns
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 leading-tight">
                Symptoms people may experience
              </h2>

              <p className="text-gray-600 mt-4 sm:mt-5 leading-7">
                Symptoms can vary from person to person. Understanding the
                pattern and severity of symptoms is an important part of
                deciding what kind of professional evaluation may be appropriate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200">

              {treatment.symptoms.map((symptom, index) => (
                <div
                  key={symptom}
                  className="bg-white p-6 sm:p-7 md:p-8 min-h-[150px] sm:min-h-[175px] md:min-h-[190px] hover:bg-[#AE2580] group transition duration-300"
                >
                  <div className="flex items-start justify-between gap-4">

                    <span className="text-sm font-bold text-[#AE2580] group-hover:text-white/70 transition">
                      0{index + 1}
                    </span>

                    <span className="text-xl text-[#AE2580] group-hover:text-white transition">
                      +
                    </span>

                  </div>

                  <h3 className="mt-10 sm:mt-12 text-lg md:text-xl font-semibold group-hover:text-white transition">
                    {symptom}
                  </h3>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= APPROACH ================= */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">

            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 sm:gap-12 lg:gap-24">

              <div>
                <p className="text-[#AE2580] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  Our Approach
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold mt-3 leading-[1.05]">
                  Understand.
                  <br />
                  Personalise.
                  <br />
                  Support.
                </h2>

                <p className="text-gray-500 mt-5 sm:mt-6 leading-7 max-w-sm">
                  Every individual can have different symptoms, lifestyle
                  factors and functional concerns. Care is therefore approached
                  on an individual basis.
                </p>
              </div>

              <div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 sm:mb-12">

                  <div>
                    <span className="text-[#AE2580] font-bold text-sm">
                      01
                    </span>

                    <h3 className="font-bold text-xl mt-3">
                      Understand
                    </h3>

                    <p className="text-gray-500 mt-3 leading-6">
                      Understand symptoms, concerns and everyday challenges.
                    </p>
                  </div>

                  <div>
                    <span className="text-[#AE2580] font-bold text-sm">
                      02
                    </span>

                    <h3 className="font-bold text-xl mt-3">
                      Personalise
                    </h3>

                    <p className="text-gray-500 mt-3 leading-6">
                      Consider an approach according to individual needs.
                    </p>
                  </div>

                  <div>
                    <span className="text-[#AE2580] font-bold text-sm">
                      03
                    </span>

                    <h3 className="font-bold text-xl mt-3">
                      Support
                    </h3>

                    <p className="text-gray-500 mt-3 leading-6">
                      Focus on movement, posture and holistic wellness where
                      appropriate.
                    </p>
                  </div>

                </div>

                <div className="border-t border-gray-200 pt-8 sm:pt-9">
                  <p className="text-gray-700 text-base sm:text-lg leading-7 sm:leading-8">
                    {treatment.approach}
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ================= PRACTITIONER ================= */}
        <section className="bg-[#252525] text-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20">

            <div className="grid md:grid-cols-[1fr_auto] gap-8 sm:gap-10 items-center">

              <div>
                <p className="text-[#AE2580] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em]">
                  Your Practitioner
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold mt-3">
                  Dr. Pawan Srivastava
                </h2>

                <p className="text-gray-300 mt-4 max-w-2xl leading-7">
                  MD. Chiro. • MD. Acu. • Diabetes Educator • PLR Therapist
                </p>

                <p className="text-gray-400 mt-2">
                  32 Years of Experience in Holistic Health & Therapy
                </p>
              </div>

              <Link
                to="/about"
                className="w-full md:w-auto inline-flex items-center justify-center rounded-full border border-white/20 px-6 sm:px-7 py-3.5 font-semibold hover:bg-white hover:text-[#252525] transition"
              >
                Know More About Dr. Pawan
              </Link>

            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="bg-[#FAF7F9]">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">

            <div className="text-center mb-10 sm:mb-12">
              <p className="text-[#AE2580] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                Frequently Asked Questions
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 leading-tight">
                Questions about {treatment.title}
              </h2>
            </div>

            <div className="space-y-3">

              {treatment.faq.map(([question, answer], index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={question}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="w-full px-5 sm:px-6 py-5 text-left flex items-center justify-between gap-4"
                    >
                      <span className="font-semibold text-base md:text-lg leading-6">
                        {question}
                      </span>

                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xl transition ${
                          isOpen
                            ? "bg-[#AE2580] text-white"
                            : "bg-[#FAF7F9] text-[#AE2580]"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6">
                        <div className="border-t border-gray-100 pt-5">
                          <p className="text-gray-600 leading-7">
                            {answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* ================= RELATED TREATMENTS ================= */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 sm:gap-6 mb-8 sm:mb-10">

              <div>
                <p className="text-[#AE2580] text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
                  Explore More
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold mt-3">
                  Related Treatments
                </h2>
              </div>

              <Link
                to="/treatments"
                className="text-[#AE2580] font-semibold hover:underline"
              >
                View all treatments →
              </Link>

            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">

              {treatment.related.map((item, index) => (
                <Link
                  key={item}
                  to={`/treatments/${item}`}
                  className="group rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-7 hover:border-[#AE2580] hover:shadow-lg transition duration-300"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-sm font-bold text-[#AE2580]">
                      0{index + 1}
                    </span>

                    <span className="text-xl group-hover:translate-x-1 transition">
                      →
                    </span>

                  </div>

                  <h3 className="text-xl font-bold mt-10 sm:mt-12">
                    {treatmentNames[item]}
                  </h3>

                  <p className="text-gray-500 text-sm mt-3 leading-6">
                    Explore this treatment and learn more about the condition.
                  </p>

                </Link>
              ))}

            </div>
          </div>
        </section>

        {/* ================= DISCLAIMER ================= */}
        <section className="bg-[#FAF7F9]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-7 sm:py-8">

            <p className="text-xs sm:text-sm text-gray-500 leading-6 max-w-5xl">
              <strong className="text-gray-600">
                Important:
              </strong>{" "}
              The information on this page is for general educational purposes
              and should not replace professional medical diagnosis or treatment.
              Individual results and appropriate care may vary.
            </p>

          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="bg-[#FAF7F9] px-5 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-28">

          <div className="max-w-7xl mx-auto">

            <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-[#AE2580] px-6 sm:px-7 md:px-14 py-10 sm:py-14 md:py-16">

              <div className="absolute -right-20 -top-20 w-56 sm:w-64 h-56 sm:h-64 rounded-full border border-white/10" />

              <div className="absolute -right-5 -bottom-32 w-64 sm:w-72 h-64 sm:h-72 rounded-full border border-white/10" />

              <div className="relative max-w-3xl">

                <p className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
                  MBS Health Solutions & Chiropractic
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
                  Looking for personalised support?
                </h2>

                <p className="text-white/80 mt-5 text-base sm:text-lg leading-7 max-w-2xl">
                  Discuss your symptoms and concerns with our team and understand
                  what type of care may be appropriate for you.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">

                  <Link
                    to="/appointment"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-7 py-3.5 text-[#AE2580] font-bold hover:bg-gray-100 transition"
                  >
                    Book Appointment
                  </Link>

                  <a
                    href="tel:+918076569626"
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/30 px-6 sm:px-7 py-3.5 text-white font-semibold hover:bg-white/10 transition"
                  >
                    +91 80765 69626
                  </a>

                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default TreatmentDetail;
