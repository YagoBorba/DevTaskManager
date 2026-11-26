import React from 'react';

interface MobileMenuProps {
  isVisible: boolean;
  onNavigate: () => void;
}

const sections = [
  { id: 'projects', label: 'Projetos' },
  { id: 'tasks', label: 'Tarefas' },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isVisible, onNavigate }) => {
  if (!isVisible) return null;

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    onNavigate();
  };

  return (
    <nav className="bg-white shadow-md md:hidden">
      <div className="px-6 py-4 space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => goTo(section.id)}
            className="block w-full text-left text-gray-600 hover:text-primary"
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileMenu;
