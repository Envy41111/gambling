import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Build something amazing today
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Create stunning websites and applications with our powerful platform. Start your journey today and bring your ideas to life.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center gap-2">
                Get started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}