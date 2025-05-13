export function Footer() {
  return <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vaishnavi Gudimella. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}