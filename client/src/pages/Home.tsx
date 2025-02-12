import { motion } from "framer-motion";
import ParallaxSection from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Brain, Lock, Users, CheckCircle, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      <section className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-6">
            Security For Everyone, Without Exception
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            At Puramics Chains, we believe everyone deserves a fraud-free digital life. 
            Our GenAI-powered security solutions make advanced protection accessible to all, 
            regardless of their background or resources.
          </p>
          <Link href="/contact">
            <Button size="lg">Get Started</Button>
          </Link>
        </motion.div>
      </section>

      <ParallaxSection className="bg-[#FF9F1C] text-white py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Shield className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Detect</h3>
              <p>Our AI constantly monitors for potential threats and suspicious activities</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Brain className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analyze</h3>
              <p>Advanced algorithms assess risks and identify fraud patterns in real-time</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Lock className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Protect</h3>
              <p>Immediate action to prevent fraud and secure your digital assets</p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      <section className="container py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Security For All</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 border rounded-lg">
            <Users className="w-12 h-12 mb-4 text-[#FF9F1C]" />
            <h3 className="text-xl font-semibold mb-2">Inclusive Protection</h3>
            <p>Affordable security solutions scaled to your needs, making protection accessible to everyone</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border rounded-lg">
            <CheckCircle className="w-12 h-12 mb-4 text-[#FF9F1C]" />
            <h3 className="text-xl font-semibold mb-2">Fraud Prevention</h3>
            <p>Proactive measures to prevent cyber fraud before it happens</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border rounded-lg">
            <Heart className="w-12 h-12 mb-4 text-[#FF9F1C]" />
            <h3 className="text-xl font-semibold mb-2">Community First</h3>
            <p>Committed to protecting everyone's right to a secure digital life</p>
          </div>
        </div>
      </section>

      <ParallaxSection className="bg-gray-50 py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">How We Prevent Cyber Frauds</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-[#FF9F1C] p-1 rounded-full mt-1" />
                  <p>Real-time transaction monitoring with AI-powered fraud detection</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#FF9F1C] p-1 rounded-full mt-1" />
                  <p>Behavioral analysis to identify suspicious patterns</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#FF9F1C] p-1 rounded-full mt-1" />
                  <p>Multi-layer authentication and device fingerprinting</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#FF9F1C] p-1 rounded-full mt-1" />
                  <p>Continuous system updates to counter emerging threats</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-[#FF9F1C] p-1 rounded-full mt-1" />
                  <p>Educational resources to help users identify and avoid scams</p>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" 
                alt="Cyber Security" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
}