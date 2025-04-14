
import React from 'react';
import CertificationCard from '../ui/certification-card';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Oracle Certified Professional, Java SE 8",
      issuer: "Oracle",
      date: "May 2021",
      image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      credentialUrl: "#"
    },
    {
      id: 2,
      title: "Spring Professional Certification",
      issuer: "VMware",
      date: "September 2022",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      credentialUrl: "#"
    },
    {
      id: 3,
      title: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      date: "January 2023",
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      credentialUrl: "#"
    },
    {
      id: 4,
      title: "MySQL Database Administration",
      issuer: "Oracle",
      date: "June 2022",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      credentialUrl: "#"
    }
  ];

  return (
    <section id="certifications" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Certifications</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              title={certification.title}
              issuer={certification.issuer}
              date={certification.date}
              image={certification.image}
              credentialUrl={certification.credentialUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
