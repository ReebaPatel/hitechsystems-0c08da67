const ClientLogos = () => {
  const clients = [
    { name: "MCGM", full: "Municipal Corporation of Greater Mumbai" },
    { name: "BARC", full: "Bhabha Atomic Research Centre" },
    { name: "Indian Railways", full: "Indian Railways" },
    { name: "ONGC", full: "Oil and Natural Gas Corporation" },
    { name: "BEST", full: "Brihanmumbai Electric Supply and Transport" },
    { name: "NPCIL", full: "Nuclear Power Corporation of India" },
  ];

  return (
  <section className="py-16 bg-muted">
  <div className="container mx-auto px-6 sm:px-10 lg:px-14">
    <div className="text-center mb-12">
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
        Trusted By Government Leaders
      </h2>
    </div>

    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
      {clients.map((client, index) => (
        <div
          key={client.name}
          className="flex items-center justify-center p-4 sm:p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
              {client.name}
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground">
              {client.full}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ClientLogos;
