import { motion } from "framer-motion";
import ParallaxSection from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Brain, Lock } from "lucide-react";

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
            Next-Gen Security Through AI Innovation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Puramics Chains specializes in GenAI-based security solutions for mobile and desktop platforms,
            protecting your digital assets with cutting-edge artificial intelligence.
          </p>
          <Link href="/contact">
            <Button size="lg">Get Started</Button>
          </Link>
        </motion.div>
      </section>

      <ParallaxSection className="bg-[#058ED9] text-white py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Shield className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Protection</h3>
              <p>AI-powered security that adapts to emerging threats in real-time</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Brain className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Detection</h3>
              <p>Intelligent threat detection using state-of-the-art machine learning</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Lock className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Zero Trust Security</h3>
              <p>Comprehensive security framework for modern enterprises</p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      <section className="container py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1513880365980-7159ec1cba3a" 
              alt="Security Visualization" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Puramics Chains?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-[#16DB93] p-1 rounded-full mt-1" />
                <p>Industry-leading AI technology that stays ahead of cyber threats</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#16DB93] p-1 rounded-full mt-1" />
                <p>Comprehensive protection for both mobile and desktop platforms</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#16DB93] p-1 rounded-full mt-1" />
                <p>24/7 monitoring and real-time threat response</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
