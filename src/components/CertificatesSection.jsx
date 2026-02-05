const certificates =[
  {
    id: 1,
    title: "CCNA (SAMPLE/NOTMINE)",
    imageUrl: "/certificates/ccna.png"
  },
];
export const CertificatesSection = ()  =>{
  return (
    <section 
      id="certificates"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My
          {" "}
          <span className="text-primary">
            Certificates
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, key) => (
            <div 
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover "
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={certificate.imageUrl} 
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-colors duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 ">
                  {certificate.title}
              </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}