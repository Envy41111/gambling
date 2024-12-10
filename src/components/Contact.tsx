import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
              <p className="mt-4 leading-7 text-gray-600">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
              <div className="flex gap-x-4">
                <div className="flex-none">
                  <Mail className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Email</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">contact@example.com</p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="flex-none">
                  <Phone className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Phone</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">+1 (555) 234-5678</p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="flex-none">
                  <MapPin className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Location</p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">123 Innovation Street, Tech City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}