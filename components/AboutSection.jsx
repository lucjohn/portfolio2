import { ChartAreaIcon, Code, GithubIcon } from "lucide-react"

export const AboutSection = () => {
    
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Who?</h3>
                    <p className="text-muted-foreground">
                       Im currently 3rd year co-op student at UFT majoring in statistics and computer science, Im looking to be able to use some skills, such as Frontend development technologies such as HTML, CSS that I learned in coursework as well as some of the side projects that
                        I've done to create products that are used by real clientele. I would also love to be able to learn professional practices in the work place to improve these skills. 
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Contact Me</a>
                        <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300">Download CV</a>
                    </div>
                </div>
            
                <div className="grid grid-cols-1 gap-">
                    <div className="graident-border p-6 card-hover">
                        <div className="flex items-center gap-2 mt-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code/>
                            </div>
                            <h3>Data Structures and Algorithms</h3>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <GithubIcon/>
                            </div>
                            <h3>Agile Development</h3>

                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <ChartAreaIcon/>
                            </div>
                            <h3>Statistical Analysis</h3>

                        </div>
                    </div>
                    <div className="graident-border p-6 card-hover"></div>
                    
                </div>

                
            </div>
            
        </div>
    </section>
}