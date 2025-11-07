// Test script for EmailJS integration
import emailjs from '@emailjs/browser';

emailjs.init('XjZ0cPS7pyiw7nEmZ');

const testData = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '1234567890',
    subject: 'Test Subject',
    message: 'This is a test message from the debugging script.'
};

console.log('Testing EmailJS with provided credentials...');
console.log('Service ID: service_l5lz7lm');
console.log('Template ID: template_gcg7e6r');
console.log('Public Key: XjZ0cPS7pyiw7nEmZ');
console.log('Test data:', testData);

emailjs.send('service_l5lz7lm', 'template_gcg7e6r', testData)
    .then((response) => {
        console.log('✅ Email sent successfully!');
        console.log('Response:', response);
    })
    .catch((error) => {
        console.log('❌ Email send failed!');
        console.log('Error:', error);
    });