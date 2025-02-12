import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ParallaxSection from "@/components/ParallaxSection";
import { Shield, Smartphone, Monitor, Cloud, Lock, Brain, Users, Bell, ShieldCheck } from "lucide-react";

export default function Services() {
  return (
    <div className="w-full">
      <section className="container py-24">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Comprehensive security solutions designed to protect everyone, from individuals 
          to large enterprises, making digital security accessible and affordable.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Shield className="w-8 h-8 mb-2 text-[#FF9F1C]" />
              <CardTitle>Enterprise Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>Comprehensive security solutions for organizations of all sizes:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>AI-powered threat detection</li>
                <li>Real-time monitoring</li>
                <li>Custom security policies</li>
                <li>Employee security training</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Smartphone className="w-8 h-8 mb-2 text-[#FF9F1C]" />
              <CardTitle>Mobile Protection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>Keep your mobile devices secure:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>App security scanning</li>
                <li>Safe browsing protection</li>
                <li>Fraud prevention</li>
                <li>Personal data encryption</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Monitor className="w-8 h-8 mb-2 text-[#FF9F1C]" />
              <CardTitle>Desktop Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>Complete protection for your computer:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Malware detection</li>
                <li>Phishing protection</li>
                <li>Secure file storage</li>
                <li>Password management</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <ParallaxSection className="bg-[#2D3142] text-white py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Advanced Protection Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Brain className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Detection</h3>
              <p>AI-powered system that learns and adapts to new threats in real-time</p>
            </div>
            <div className="text-center">
              <Bell className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Early Warning</h3>
              <p>Instant alerts about potential security threats and suspicious activities</p>
            </div>
            <div className="text-center">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fraud Shield</h3>
              <p>Advanced fraud prevention system to protect your transactions</p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      <section className="container py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Security For Everyone</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
            <p className="text-lg mb-6">
              We believe that everyone deserves access to top-tier security solutions, 
              regardless of their financial situation. Our flexible pricing and scalable 
              solutions ensure that quality security is within reach for all.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#FF9F1C] mt-1" />
                <span>Affordable plans for individuals and families</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-[#FF9F1C] mt-1" />
                <span>Enterprise-grade security for small businesses</span>
              </li>
              <li className="flex items-start gap-3">
                <Cloud className="w-5 h-5 text-[#FF9F1C] mt-1" />
                <span>Scalable solutions that grow with your needs</span>
              </li>
            </ul>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
              alt="Inclusive Security" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}