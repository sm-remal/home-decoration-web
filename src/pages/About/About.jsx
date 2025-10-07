import bannerAbout from '../../assets/banner2.jpg'
import CEO from "../../assets/ceo.jpg"
const teamDemo = [
    {
        id: 1,
        name: "Shah Mozzem Remal",
        role: "Founder & CEO",
        bio: "Design-led founder focused on simple, delightful home decor experiences.",

    },
    {
        id: 2,
        name: "SM Remal",
        role: "Product Manager",
        bio: "Bringing product ideas to life and keeping users first.",
        avatar: "https://i.pravatar.cc/150?img=47",
    },
    {
        id: 3,
        name: "Mozzem",
        role: "Lead Developer",
        bio: "Building performant frontends and joyful developer experiences.",
        avatar: "https://i.pravatar.cc/150?img=12",
    },
];

const About = ({ team = teamDemo }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
            {/* Hero */}
            <header className="max-w-6xl mx-auto px-6 py-8 md:py-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                    <h1 className="text-3xl md:text-5xl font-semibold mb-4">
                        About Us
                    </h1>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        We create beautiful, functional home decor and shopping experiences.
                        Our mission is to make every home feel like a story — thoughtfully
                        designed, sustainably sourced, and made for living.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="/"
                            className="btn btn-secondary btn-sm"
                        >
                            Visit Store
                        </a>

                        <button
                            onClick={() => window.history.back()}
                            className="nav-btn btn-sm"
                        >
                            Go Back
                        </button>
                    </div>
                </div>

                {/* Simple illustrative SVG */}
                <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-md">
                        <img src={bannerAbout} alt="" className='rounded-xl h-[380px] w-full' />
                    </div>
                </div>
            </header>

            {/* Mission & Vision */}
            <section className="max-w-6xl mx-auto px-6 md:py-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
                    <p className="text-gray-600 mb-4">
                        To inspire thoughtful living by offering well-made products that
                        balance form and function. We believe in responsible sourcing,
                        transparent pricing, and creating pieces that last.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                        <li>• Ethically sourced materials</li>
                        <li>• Durable & timeless design</li>
                        <li>• Friendly, responsive support</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
                    <p className="text-gray-600">
                        To be the go-to destination for people who love homes that feel
                        personal and unique—helping them tell their stories through
                        spaces and objects.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="bg-white border-t border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 py-10 grid sm:grid-cols-3 gap-6">
                    <div className="p-4">
                        <h4 className="text-xl font-semibold mb-2">Curated Collections</h4>
                        <p className="text-gray-600">Thoughtfully selected pieces that work together beautifully.</p>
                    </div>
                    <div className="p-4">
                        <h4 className="text-xl font-semibold mb-2">Sustainable Sourcing</h4>
                        <p className="text-gray-600">We prioritize suppliers who respect people and the planet.</p>
                    </div>
                    <div className="p-4">
                        <h4 className="text-xl font-semibold mb-2">Fast Support</h4>
                        <p className="text-gray-600">Friendly customer care to help you choose and install with confidence.</p>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h3 className="text-3xl font-semibold text-center mb-8">Meet the Team</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {team.map(member => (
                        <article key={member.id} className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4">
                                <img src={CEO} alt={member.name} className="w-16 h-16 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-semibold">{member.name}</h4>
                                    <p className="text-sm text-gray-500">{member.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-4 text-sm">{member.bio}</p>
                            <div className="mt-4 flex gap-3">
                                <button className="btn btn-secondary btn-sm">Contact</button>
                                <button className="nav-btn btn-sm">LinkedIn</button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-6xl mx-auto px-6 py-12 text-center">
                <h3 className="text-2xl font-semibold mb-3">Want to collaborate?</h3>
                <p className="text-gray-600 mb-6">We're always open to new ideas, partnerships, and talented people.</p>
                <a
                    href="/contact"
                    className="btn btn-secondary btn-sm">Contact Us
                </a>
            </section>
        </div>
    );
};

export default About;
