import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="font-script text-4xl mb-4">Olga & Edrich</h3>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700">
          <p className="text-slate-400 text-sm">December 15, 2025</p>
        </div>
      </div>
    </footer>
  );
}
