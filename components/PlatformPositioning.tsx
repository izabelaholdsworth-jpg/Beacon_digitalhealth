export default function PlatformPositioning() {
    return (
        <section id="platform" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                            The Beacon <br />
                            <span className="text-slate-500">Intelligence Modules</span>
                        </h2>
                        <div className="h-1 w-20 bg-primary mb-8"></div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            Beacon helps organisations make better decisions using the data they already have. We bring together finance, procurement, contracts and operational signals to identify control risk, waste and capacity opportunities.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We design and deliver digital modules that reduce admin burden and improve the patient pathway experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
