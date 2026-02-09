import { useState, type ChangeEvent, type MouseEvent } from "react";
import {
  ChevronLeft,
  AlertTriangle,
  Shield,
  User,
  HelpCircle,
  Mail,
  MessageCircle,
  Trash2,
} from "lucide-react";
import brainwaveSymbol from "../../assets/agent_icon.png";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  confirmEmail: string;
  selectedReason: string;
  feedback: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const DeleteAccountPage = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    confirmEmail: "",
    selectedReason: "",
    feedback: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const reasons = [
    "Found a better alternative",
    "Not using the service anymore",
    "Privacy concerns",
    "Too expensive",
    "Technical issues",
    "Other",
  ];

  const validateEmail = (email: string) => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const field = name as keyof FormData;
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    }
    if (!formData.confirmEmail.trim()) {
      newErrors.confirmEmail = "Please confirm your email";
    } else if (formData.confirmEmail !== formData.email) {
      newErrors.confirmEmail = "Email addresses do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Account deletion request submitted");
    console.log("Form data:", formData);
  };

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button
              onClick={handleBack}
              className="mr-4 p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-300" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black-600 rounded-lg flex items-center justify-center">
                <img
                  src={brainwaveSymbol}
                  width={48}
                  height={48}
                  alt="brainwave"
                />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-white">MyAgent</h1>
                <p className="text-xs text-gray-400">Account Deletion Center</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Warning Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-red-950/50 rounded-full flex items-center justify-center border border-red-900/50">
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </div>

          {/* Title and Description */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">
              Delete Your MyAgent Account
            </h2>
            <p className="text-gray-400">
              We're sorry to see you go. Help us improve by sharing your
              feedback.
            </p>
          </div>

          {/* Account Type Button */}
          <div className="flex justify-center">
            <button
              type="button"
              className="flex items-center space-x-3 px-6 py-4 bg-zinc-900 border-2 border-blue-600 rounded-lg w-full max-w-xs hover:bg-zinc-800 transition-colors"
            >
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-white">Secure Process</span>
            </button>
          </div>

          {/* Confirm Identity Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-white">
                Confirm Your Identity
              </h3>
            </div>

            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 bg-zinc-900 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500 ${
                  errors.fullName ? "border-red-500" : "border-zinc-700"
                }`}
              />
              {errors.fullName && (
                <p className="text-red-400 text-sm">{errors.fullName}</p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 bg-zinc-900 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500 ${
                  errors.email ? "border-red-500" : "border-zinc-700"
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+234 XXX XXX XXXX"
                className={`w-full px-4 py-3 bg-zinc-900 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500 ${
                  errors.phone ? "border-red-500" : "border-zinc-700"
                }`}
              />
              {errors.phone && (
                <p className="text-red-400 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Why are you leaving */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-blue-500" />
              <h3 className="text-base font-semibold text-white">
                Why are you leaving? (Optional but helpful)
              </h3>
            </div>

            <select
              name="selectedReason"
              value={formData.selectedReason}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white"
            >
              <option value="" className="bg-zinc-900">
                Select a reason
              </option>
              {reasons.map((reason) => (
                <option key={reason} value={reason} className="bg-zinc-900">
                  {reason}
                </option>
              ))}
            </select>
          </div>

          {/* Additional Feedback */}
          <div className="space-y-2">
            <label className="block text-base font-semibold text-white">
              Additional Feedback
            </label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              placeholder="Tell us more about your experience or what we could improve..."
              rows={4}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-white placeholder-gray-500"
            />
          </div>

          {/* Final Confirmation Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <h3 className="text-base font-semibold text-white">
                Final Confirmation
              </h3>
            </div>

            {/* Warning Box */}
            <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-4 space-y-3">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <span className="font-semibold text-red-400 text-sm">
                  This action cannot be undone
                </span>
              </div>

              <div className="space-y-1.5 ml-1">
                <div className="flex items-start space-x-2 text-red-400">
                  <span className="text-sm mt-0.5">-</span>
                  <p className="text-sm">
                    All your property listings will be removed
                  </p>
                </div>
                <div className="flex items-start space-x-2 text-red-400">
                  <span className="text-sm mt-0.5">-</span>
                  <p className="text-sm">Your chat history will be deleted</p>
                </div>
                <div className="flex items-start space-x-2 text-red-400">
                  <span className="text-sm mt-0.5">-</span>
                  <p className="text-sm">
                    Your wallet balance will be processed for refund
                  </p>
                </div>
                <div className="flex items-start space-x-2 text-red-400">
                  <span className="text-sm mt-0.5">-</span>
                  <p className="text-sm">
                    Your reviews and ratings will be anonymized
                  </p>
                </div>
                <div className="flex items-start space-x-2 text-red-400">
                  <span className="text-sm mt-0.5">-</span>
                  <p className="text-sm">
                    You will lose access to all saved properties
                  </p>
                </div>
              </div>
            </div>

            {/* Confirm Email */}
            <div className="space-y-2">
              <label className="block text-base font-semibold text-white">
                Type your email again to confirm{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleInputChange}
                placeholder="Confirm your email address"
                className={`w-full px-4 py-3 bg-zinc-900 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500 ${
                  errors.confirmEmail ? "border-red-500" : "border-zinc-700"
                }`}
              />
              {errors.confirmEmail && (
                <p className="text-red-400 text-sm">{errors.confirmEmail}</p>
              )}
            </div>
          </div>

          {/* Delete Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Trash2 className="w-5 h-5" />
            <span>Delete My Account Permanently</span>
          </button>

          {/* Disclaimer */}
          <p className="text-sm text-gray-400 text-center">
            By clicking above, you acknowledge that this action will permanently
            delete your account after 7 days.
          </p>

          {/* Need Help Section */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-3">
            <div className="flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-blue-500" />
              <h3 className="text-base font-semibold text-white">
                Need Help Instead?
              </h3>
            </div>

            <p className="text-sm text-gray-400">
              Before deleting your account, consider reaching out to our support
              team. We might be able to help resolve any issues you're
              experiencing.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() =>
                  (window.location.href = "mailto:support@myagent.africa")
                }
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-gray-300" />
                <span className="text-sm font-medium text-gray-300">
                  Contact Support
                </span>
              </button>
              <button
                onClick={() => console.log("Open live chat")}
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-gray-300" />
                <span className="text-sm font-medium text-gray-300">
                  Live Chat
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeleteAccountPage;
