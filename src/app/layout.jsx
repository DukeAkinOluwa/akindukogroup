import "./globals.css";

export const metadata = {
    title: "Akinduko Group",
    description: "Akinduko Group",
    metadataBase: new URL('https://akindukogroup.com'),
    openGraph: {
        url: ".",
        title: "Akinduko Group",
        description: "Akinduko Group",
        siteName: "Akinduko Group",
        images: [
        {
            url: "./Images/Logo.png",
            width: 800,
            height: 600,
        },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@AkindukoGroup",
        title: "Akinduko Group",
        description: "Akinduko Group",
        imageUrl: "/Images/Logo.png",
    },
    icon: '/Images/Logo.png',
    manifest: './manifest.json'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        </head>
        <body className="">
            {children}
        </body>
        </html>
    );
}
