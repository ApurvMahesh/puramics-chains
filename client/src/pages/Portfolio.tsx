import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import ParallaxSection from "@/components/ParallaxSection";

export default function Portfolio() {
  return (
    <div className="w-full">
      <section className="container py-24">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Portfolio</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <img
                src="https://images.unsplash.com/photo-1526666361175-e3595627c376"
                alt="Security Solutions"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Enterprise Security Suite</h3>
              <p className="text-muted-foreground">
                Comprehensive security solution for Fortune 500 companies, featuring
                AI-powered threat detection and response.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <img
                src="https://images.unsplash.com/photo-1532264251691-2ad92a2ec88f"
                alt="Mobile Security"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Mobile Security Platform</h3>
              <p className="text-muted-foreground">
                Advanced mobile security platform protecting millions of devices
                worldwide with real-time threat prevention.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <ParallaxSection className="bg-[#058ED9] text-white py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Global Tech Corp</h3>
              <p>"Puramics Chains revolutionized our security infrastructure with their AI-driven solutions."</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">FinTech Solutions</h3>
              <p>"Their mobile security platform provides unmatched protection for our financial applications."</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Healthcare Systems</h3>
              <p>"Exceptional security solutions that ensure our patient data remains protected."</p>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
}
