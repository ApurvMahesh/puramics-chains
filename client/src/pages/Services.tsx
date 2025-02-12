import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ParallaxSection from "@/components/ParallaxSection";
import { Shield, Smartphone, Monitor, Cloud, Lock, Brain } from "lucide-react";

export default function Services() {
  return (
    <div className="w-full">
      <section className="container py-24">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 mb-2 text-[#058ED9]" />
              <CardTitle>Enterprise Security</CardTitle>
            </CardHeader>
            <CardContent>
              Comprehensive security solutions for enterprise-scale organizations,
              powered by advanced AI technology.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Smartphone className="w-8 h-8 mb-2 text-[#058ED9]" />
              <CardTitle>Mobile Protection</CardTitle>
            </CardHeader>
            <CardContent>
              AI-driven security solutions specifically designed for mobile
              platforms and applications.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Monitor className="w-8 h-8 mb-2 text-[#058ED9]" />
              <CardTitle>Desktop Security</CardTitle>
            </CardHeader>
            <CardContent>
              Advanced protection for desktop environments, ensuring comprehensive
              security across your organization.
            </CardContent>
          </Card>
        </div>
      </section>

      <ParallaxSection className="bg-[#2D3142] text-white py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Brain className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">GenAI Core</h3>
              <p>State-of-the-art artificial intelligence for threat detection</p>
            </div>
            <div className="text-center">
              <Cloud className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Security</h3>
              <p>Robust protection for cloud-based infrastructure</p>
            </div>
            <div className="text-center">
              <Lock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Zero Trust</h3>
              <p>Modern security architecture for complete protection</p>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
}