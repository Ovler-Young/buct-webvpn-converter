const Footer = () => (
  <footer className="bg-zinc-500/10 p-4 text-center text-gray-400 text-sm">
    Created with love at BUCT
    <br />
    Source code by{' '}
    <a
      href="https://spencerwoo.com"
      target="_blank"
      rel="noopener noreferrer"
      className="underline opacity-80 hover:opacity-100 transition-all duration-150"
    >
      Spencer Woo
    </a>{' '}
    <br />
    Edited by{' '}
    <a
      href="https://180811.xyz"
      target="_blank"
      rel="noopener noreferrer"
      className="underline opacity-80 hover:opacity-100 transition-all duration-150"
    >
    Ovler
    </a>{' '}
    @ {new Date().getFullYear()}
  </footer>
)
export default Footer
