import React from 'react';
import Link from 'next/link';
// import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Twitter} from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <div>
          <h3>QUICK LINKS</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link href="/manika-traders-home">Manika Traders Home</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/why-sbs">Why SBS</Link></li>
            <li><Link href="/the-leadership-group">The Leadership Group</Link></li>
            <li><Link href="/partners">Partners</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/events">Events</Link></li>
          </ul>
        </div>
        <div>
          <h3>SOLUTIONS</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link href="/analytics">Analytics</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/Iot-big-data">IoT Big Data</Link></li>
            <li><Link href="/Intelligent-finance">Intelligent Finance</Link></li>
            <li><Link href="/digital-manufacturing">Digital Manufacturing</Link></li>
            <li><Link href="/cloud-enablement-migration">Cloud Enablement Migration</Link></li>
            <li><Link href="/manufacturing-operations-management">Manufacturing Operations Management</Link></li>
            <li><Link href="/product-lifecycle-management">Product Lifecycle Management</Link></li>
            <li><Link href="/SAP-implementation-integration-services">SAP Implementation Integration Services</Link></li>
          </ul>
        </div>
        <div>
          <h3>FOLLOW US</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={30} color="#1DA1F2" /></Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={30} color="#4267B2" /></Link>
            <Link href="https://Instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={30} color="#2867B2" /></Link>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', borderTop: '1px solid #444', paddingTop: '10px' }}>
        <p>Copyrights © 2019 All Rights Reserved by SBS Corp.</p>
      </div>
    </footer>
  );
};

export default Footer;
