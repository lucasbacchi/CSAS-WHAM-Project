export default function Vindolanda() {
    return (
        <>
            <div className="page-container">
                <h1 className="text-3xl mb-4">Deep Dive into Vindolanda</h1>
                <p>
                    Vindolanda was established around AD 85 as part of the
                    Stanegate frontier, famous for its wooden writing tablets
                    that reveal everyday life. In the Hadrianic era (c. AD
                    120–140), the fort was rebuilt in stone and integrated into
                    Hadrian’s Wall defenses. During the Antonine and Severan
                    periods (c. AD 140–230), new construction phases and
                    monuments like the sandstone relief of the goddess Victoria
                    reflected military ideology. Vindolanda remained occupied
                    into the late Roman period (c. AD 230–370), housing a mixed
                    military and civilian community before abandonment. Its
                    unique anaerobic soil preserved rare organic materials,
                    making it one of the most important archaeological sites in
                    Roman Britain.
                </p>
                <figure className="figure-side m-8">
                    <a
                        href="https://en.wikipedia.org/wiki/Vindolanda"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://hadrianswallcountry.co.uk/wp-content/uploads/2022/03/Vindolanda-Aerial-2020-1500x1000.jpg"
                            alt="Vindolanda Roman fort"
                            className="responsive-img max-w-1/2 mx-auto"
                        />
                    </a>
                    <figcaption className="figure-caption-side m-4 text-center">
                        Vindolanda Roman fort — site of remarkable organic finds
                        and writing tablets. See the full article on{" "}
                        <a
                            href="https://en.wikipedia.org/wiki/Vindolanda"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Wikipedia
                        </a>
                        .
                    </figcaption>

                </figure>
                <a href="/">Back Home</a>
            </div>
        </>
    );
}
