import { motion } from "framer-motion";
import { Github, GitBranch, Cloud, Server, Globe, Workflow } from "lucide-react";


const steps = [
  { title: "Code Push", desc: "Commit & push to GitHub triggers CI/CD.", icon: <Github className="w-6 h-6" /> },
  { title: "GitHub Actions", desc: "Pipeline builds, runs tests.", icon: <GitBranch className="w-6 h-6" /> },
  { title: "Deploy to EC2", desc: "Backend auto-deployed on AWS EC2.", icon: <Server className="w-6 h-6" /> },
  { title: "Sync S3", desc: "Static assets synced to AWS S3 bucket.", icon: <Cloud className="w-6 h-6" /> },
  { title: "CloudFront", desc: "Site delivered globally with HTTPS.", icon: <Globe className="w-6 h-6" /> },
];


const DeploymentProcess = () => {
  return (
    <section id="deployment-process" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold flex items-center justify-center gap-3">
            <Workflow className="w-8 h-8 text-blue-400" />
            My Deployment Process
            </h2>
            <p className="text-gray-400 mt-2">
            How I automate code deployment from GitHub to AWS
            </p>
        </div>
        </motion.h2>
        <p className="text-gray-400 mb-12">
          This portfolio is continuously deployed using{" "}
          <span className="text-blue-400 font-medium">GitHub Actions</span> →{" "}
          <span className="text-yellow-300 font-medium">AWS EC2</span>,{" "}
          <span className="text-green-300 font-medium">S3</span>, and{" "}
          <span className="text-purple-300 font-medium">CloudFront</span>.
        </p>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center text-3xl bg-blue-500/20 border border-blue-500/30 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>

              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-[2px] bg-gradient-to-r from-blue-500/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* GitHub Actions Badge */}
        <div className="mt-12">
          <img
            src="https://img.shields.io/github/actions/workflow/status/thimpu-create/myport/deploy.yml?branch=main"
            alt="GitHub Actions Status"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default DeploymentProcess;
