

const Footer = () => {
    return (
        <>
            <section className="mx-5 bg-green-200 -mt-5 border-2 border-slate-950">
                <div className="hero  ">
                    <div className="hero-content flex-col lg:flex-row">

                        <div className="md:w-[700px]">
                            <div >
                                <h1 className="text-3xl py-2 font-semibold">GREENMIND</h1>
                                <p className="text-xl">We help you find <br /> your dream plant</p>
                            </div>
                            <div className="flex flex-row gap-3 py-3">
                                <div>facebook</div>
                                <div>instagram</div>
                                <div>twitter</div>
                            </div>
                        </div>

                        <div>
                            <table className="text-xl table-sm">
                                <thead>
                                    <tr>
                                        <th>Information</th>
                                        <th>Company</th>
                                        <th>Contact</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr >
                                        <td>About</td>
                                        <td>Community</td>
                                        <td>Getting Started</td>
                                    </tr>
                                    <tr>
                                        <td>Product</td>
                                        <td>Career</td>
                                        <td>Pricing</td>
                                    </tr>
                                    <tr>
                                        <td>Blog</td>
                                        <td>Our story</td>
                                        <td>resources</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <footer className="mx-5 text-center bg-green-200 py-5 text-2xl text-slate-950">All right reserved @GREENMIND</footer>
            </section>


        </>
    )
}

export default Footer;