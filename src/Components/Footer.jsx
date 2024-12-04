import React from 'react'

const Footer = () => {

    return (
        <footer className="bg-gray-800 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1: About */}
              <div>
                <h4 className="text-lg font-semibold mb-4">About Us</h4>
                <p className="text-sm">
                  We are committed to providing the best services for our customers. Stay connected with us for updates.
                </p>
              </div>
    
              {/* Column 2: Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm hover:text-gray-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:text-gray-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:text-gray-300">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm hover:text-gray-300">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
    
              {/* Column 3: Newsletter */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                <p className="text-sm mb-4">
                  Subscribe to our newsletter to receive updates and offers.
                </p>
                <form className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-md text-gray-800 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
    
            {/* Bottom Section */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
  
}

export default Footer
