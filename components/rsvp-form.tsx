"use client";

import type React from "react";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function RsvpForm() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ name?: string; attending?: string }>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const validate = () => {
    const newErrors: { name?: string; attending?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }
    if (!formData.attending) {
      newErrors.attending = "Please select if you’ll be joining us.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    if (!validate()) return;

    setLoading(true);
    const { error } = await supabase.from("Invitations").insert([
      {
        Full_Name: formData.name,
        Answer: formData.attending,
        Special_Message: formData.message,
      },
    ]);

    if (error) {
      console.error("Error saving RSVP:", error.message);
      setFeedback("Something went wrong. Please try again.");
    } else {
      setFeedback(
        "🎉 Thank you for your RSVP! We can't wait to celebrate with you."
      );
      setFormData({ name: "", attending: "", message: "" });
      setErrors({});
    }

    setLoading(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined })); // clear error as user types
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300 blur-3xl w-80 h-80"></div>
        <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-300 blur-3xl w-64 h-64"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="font-script text-3xl md:text-4xl text-emerald-700 mb-4">
            Please Join Us
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-slate-800 mb-6">
            RSVP
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-amber-500 mx-auto mb-6" />
          <p className="font-serif text-slate-700 text-lg max-w-2xl mx-auto">
            We're so excited to celebrate with you! Please let us know if you'll
            be joining us for our special day.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/30">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl text-slate-800">
                Kindly Respond by November 20, 2025
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-800 font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`border-slate-200 focus:border-emerald-500 rounded-lg ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm">{errors.name}</p>
                  )}
                </div>

                {/* Attending */}
                <div className="space-y-2">
                  <Label
                    htmlFor="attending"
                    className="text-slate-800 font-medium"
                  >
                    Will you be joining us? *
                  </Label>
                  <Select
                    value={formData.attending}
                    onValueChange={(value) => handleChange("attending", value)}
                  >
                    <SelectTrigger
                      className={`border-slate-200 focus:border-emerald-500 rounded-lg ${
                        errors.attending ? "border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">Yes, I'll be there!</SelectItem>
                      <SelectItem value="No">Sorry, I can't make it</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.attending && (
                    <p className="text-red-600 text-sm">{errors.attending}</p>
                  )}
                </div>
              </div>

              {/* Special Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-800 font-medium">
                  Special Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="border-slate-200 focus:border-emerald-500 rounded-lg min-h-[100px]"
                  placeholder="Share your excitement or any special requests..."
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-slate-700 to-emerald-700 hover:from-slate-800 hover:to-emerald-800 text-white py-4 text-lg font-medium rounded-lg shadow-lg"
              >
                {loading ? "Sending..." : "Send RSVP"}
              </Button>

              {feedback && (
                <p className="text-center mt-4 text-slate-700">{feedback}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
