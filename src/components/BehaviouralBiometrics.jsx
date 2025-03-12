import React from 'react';
import { Shield, Database, Brain, ArrowLeftRight, ChevronRight, Users, Code, Lock } from 'lucide-react';
import ShinyButton from './ShinyButton';
import { FadeIn } from './FadeIn';

const BehaviouralBiometrics = () => {
  return (
    <FadeIn>
            <div id='behaviour' className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
      {/* Main Heading and Description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Secure Applications with Advanced{' '}
          <span className="text-[#DCBD00]">Behavioral Biometrics</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Leverage machine learning to detect anomalies in user behavior and protect your applications.
        </p>
        
        <ShinyButton  />
      </div>

      {/* Grid Layout for Key Features and Use Cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Left Side - Key Features */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Key Features</h2>
          {/* Feature Cards */}
          <div className="space-y-6">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Real-Time Anomaly Detection',
                description: 'Advanced ML models to protect from unauthorized access.',
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: 'Modular Backend Integration',
                description: 'Easy-to-use APIs for high-security applications.',
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: 'Scalable Database Support',
                description: 'Works with PostgreSQL and supports efficient pooling.',
              },
              {
                icon: <ArrowLeftRight className="w-6 h-6" />,
                title: 'Transfer Learning Enabled',
                description: 'Adapt models seamlessly for custom data.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-lg border-l-4 border-violet-600 hover:border-violet-500 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="bg-violet-600 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                    <p className="text-slate-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Use Cases */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Use Cases</h2>
          <div className="space-y-6">
            {[
              {
                icon: <Lock className="w-6 h-6" />,
                title: 'Financial Services',
                description: 'Prevent fraud with continuous behavioral authentication.',
              },
              {
                icon: <Code className="w-6 h-6" />,
                title: 'Enterprise Applications',
                description: 'Ensure only authorized access to sensitive company data.',
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-lg hover:shadow-lg transition-all duration-300 rounded-lg border-l-4 border-[#DCBD00]"
              >
                <div className="flex items-start">
                  <div className="bg-[#DCBD00] w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{useCase.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mt-16 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: 'User Behavior Analysis',
              description: 'Collects and analyzes user behavior patterns in real-time.',
            },
            {
              icon: <Brain className="w-8 h-8" />,
              title: 'ML Model Processing',
              description: 'ML models detect anomalies in user behavior.',
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: 'Threat Mitigation',
              description: 'Suspicious activities are flagged and addressed immediately.',
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-violet-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </FadeIn>

  );
};

export default BehaviouralBiometrics;