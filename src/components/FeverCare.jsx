import { useState } from "react";

import { countryMedicines } from "./medicineData";

// Helper function to pick a random medicine item
const getRandomMedicine = (medList) => {
  if (!medList) return null;
  if (Array.isArray(medList)) {
    const randomIndex = Math.floor(Math.random() * medList.length);
    return medList[randomIndex];
  }
  return medList;
};

export default function FeverCare() {
  const [country, setCountry] = useState("BD");
  const [temp, setTemp] = useState("");
  const [patientType, setPatientType] = useState("adult-male");
  const [age, setAge] = useState("");

  const [conditions, setConditions] = useState({
    diabetes: false,
    heart: false,
    pregnant: false,
    gastric: false,
  });

  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setConditions((prev) => ({ ...prev, [name]: checked }));
  };

  const handleCheck = () => {
    setError("");
    const numericTemp = parseFloat(temp);
    const numericAge = parseFloat(age);

    if (!temp || isNaN(numericTemp) || !age || isNaN(numericAge)) {
      setError("Please enter valid numbers for Temperature and Age.");
      return;
    }

    if (patientType === "child" && numericAge >= 12) {
      setError(
        "Invalid Choice: Category is set to 'Child', but age is 12 or above.",
      );
      return;
    }

    if (
      (patientType === "adult-male" || patientType === "adult-female") &&
      numericAge < 12
    ) {
      setError(
        "Invalid Choice: Category is set to 'Adult', but age is under 12.",
      );
      return;
    }

    // fallback হিসেবে BD রাখা হয়েছে যেন ডাটা মিসিং থাকলেও অ্যাপ ক্র্যাশ না করে
    const countryData = countryMedicines[country] || countryMedicines["BD"];

    if (!countryData) {
      setError(
        `Medicine data for selected country code (${country}) is not added yet.`,
      );
      return;
    }

    let availableMeds = null;
    let statusText;
    let symptomText;

    if (numericTemp < 99.0) {
      statusText = `Normal Body Temperature (${numericTemp}°F)`;
      symptomText = "No fever detected. Thermal state is normal.";
    } else if (numericTemp <= 101.0) {
      statusText = `Mild Fever (${numericTemp}°F)`;
      symptomText = "Mild body heat, low fatigue, slight body pain.";
    } else {
      statusText = `High Fever (${numericTemp}°F)`;
      symptomText = "High fever, chills, severe fatigue, and body muscle pain.";
    }

    if (numericTemp > 99.0) {
      if (patientType === "child") {
        if (numericAge < 0.5) {
          availableMeds = countryData.child?.infant;
        } else if (numericAge < 1) {
          availableMeds =
            countryData.child?.infant_older || countryData.child?.infant;
        } else if (numericAge <= 5) {
          availableMeds = countryData.child?.toddler;
        } else {
          availableMeds = countryData.child?.olderChild;
        }
      } else if (patientType === "adult-female") {
        if (numericTemp <= 100.0) availableMeds = countryData.adultFemale?.mild;
        else if (numericTemp <= 101.5)
          availableMeds = countryData.adultFemale?.moderate;
        else availableMeds = countryData.adultFemale?.severe;
      } else {
        if (numericTemp <= 100.0) availableMeds = countryData.adultMale?.mild;
        else if (numericTemp <= 101.5)
          availableMeds = countryData.adultMale?.moderate;
        else availableMeds = countryData.adultMale?.severe;
      }
    }

    const selectedMed = getRandomMedicine(availableMeds);
    const selectedGastricMed = getRandomMedicine(countryData.gastric);

    setResult({
      statusText,
      symptomText,
      medicine: selectedMed,
      hasGastric: conditions.gastric,
      gastricMed: selectedGastricMed,
      conditions,
      patientType,
      tempValue: numericTemp,
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-white max-w-xl w-full p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-200">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Global FeverCare
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Symptom Checker & Country-wise Medicine Suggestions
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Select Country / Region:
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="BD">Bangladesh</option>
              <option value="PK">Pakistan</option>
              <option value="SA">Saudi Arabia</option>
              <option value="US">USA</option>
              <option value="UK">UK (London)</option>
              <option value="QA">Qatar</option>
              <option value="AE">UAE</option>
              <option value="KW">Kuwait</option>
              <option value="CN">China</option>
              <option value="IN">India</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Body Temperature (°F):
            </label>
            <input
              type="number"
              step="0.1"
              placeholder="e.g. 100.5"
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Patient Category:
            </label>
            <select
              value={patientType}
              onChange={(e) => setPatientType(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="adult-male">Adult Male</option>
              <option value="adult-female">Adult Female</option>
              <option value="child">Child (Under 12 years)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Age (Years):
            </label>
            <input
              type="number"
              placeholder="e.g. 25 or 0.5"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Pre-existing Health Conditions:
            </label>
            <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  name="diabetes"
                  checked={conditions.diabetes}
                  onChange={handleCheckboxChange}
                  className="accent-teal-600"
                />
                Diabetes
              </label>
              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  name="heart"
                  checked={conditions.heart}
                  onChange={handleCheckboxChange}
                  className="accent-teal-600"
                />
                Heart Disease
              </label>
              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  name="pregnant"
                  checked={conditions.pregnant}
                  onChange={handleCheckboxChange}
                  className="accent-teal-600"
                />
                Pregnant
              </label>
              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  name="gastric"
                  checked={conditions.gastric}
                  onChange={handleCheckboxChange}
                  className="accent-teal-600"
                />
                Gastric / Acidity
              </label>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-xs font-semibold">
              {error}
            </div>
          )}

          <button
            type="button"
            onClick={handleCheck}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition duration-200 cursor-pointer"
          >
            Check Medical Advice
          </button>
        </div>

        {result && (
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <h3 className="text-sm font-semibold text-slate-900 border-b pb-1 mb-2">
                Detected Symptoms & Condition
              </h3>
              <p className="font-bold text-red-600 mb-1">{result.statusText}</p>
              <p className="text-sm text-slate-600">{result.symptomText}</p>
            </div>

            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <h3 className="text-sm font-semibold text-slate-900 border-b border-emerald-200 pb-1 mb-2">
                Medicine Suggestions
              </h3>

              {result.medicine ? (
                <div className="bg-white p-3 rounded-lg border-l-4 border-teal-600 shadow-sm text-sm space-y-1 mb-2">
                  <p>
                    <strong>Brand Name:</strong> {result.medicine.brand}
                  </p>
                  <p>
                    <strong>Generic:</strong> {result.medicine.generic}
                  </p>
                  <p>
                    <strong>Power:</strong> {result.medicine.power}
                  </p>
                  <p>
                    <strong>Company:</strong> {result.medicine.company}
                  </p>
                  <p>
                    <strong>Recommended Dose:</strong> {result.medicine.dose}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-slate-600">
                  {result.tempValue <= 99.0
                    ? "No fever medicine required for normal body temperature."
                    : "No specific medicine entry found for this category in selected country."}
                </p>
              )}

              {result.hasGastric && result.gastricMed && (
                <div className="bg-white p-3 rounded-lg border-l-4 border-sky-600 shadow-sm text-sm space-y-1 mt-2">
                  <p className="font-semibold text-sky-700 border-b pb-1 mb-1">
                    Gastric / Acidity Medicine:
                  </p>
                  <p>
                    <strong>Brand Name:</strong> {result.gastricMed.brand}
                  </p>
                  <p>
                    <strong>Generic:</strong> {result.gastricMed.generic}
                  </p>
                  <p>
                    <strong>Power:</strong> {result.gastricMed.power}
                  </p>
                  <p>
                    <strong>Company:</strong> {result.gastricMed.company}
                  </p>
                  <p>
                    <strong>Recommended Dose:</strong> {result.gastricMed.dose}
                  </p>
                </div>
              )}
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <h3 className="text-sm font-semibold text-slate-900 border-b border-amber-200 pb-1 mb-2">
                Special Advice for Health Conditions
              </h3>
              <ul className="text-sm text-slate-700 list-disc list-inside space-y-1">
                {result.conditions.diabetes && (
                  <li>
                    <strong>Diabetes:</strong> Ensure sugar-free liquid
                    formulations for children. Monitor sugar levels.
                  </li>
                )}
                {result.conditions.heart && (
                  <li>
                    <strong>Heart Condition:</strong> Avoid NSAIDs like
                    Ibuprofen. Use Paracetamol only.
                  </li>
                )}
                {result.conditions.pregnant && (
                  <li>
                    <strong>Pregnancy:</strong> Avoid self-medication. Consult a
                    registered doctor immediately.
                  </li>
                )}
                {result.patientType === "child" && (
                  <li>
                    <strong>Child Care:</strong> Keep hydrated and use lukewarm
                    water sponge baths for high fever.
                  </li>
                )}
                {!result.conditions.diabetes &&
                  !result.conditions.heart &&
                  !result.conditions.pregnant &&
                  result.patientType !== "child" && (
                    <li>
                      No special health condition flagged. Rest and consume
                      fluids.
                    </li>
                  )}
              </ul>
            </div>

            <div className="p-3 bg-amber-100 text-amber-800 rounded-lg text-xs leading-relaxed">
              <strong>Important Medical Disclaimer:</strong> Dosage calculations
              require exact body weight and professional evaluation. This tool
              is for informational purposes only.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
