import React from 'react';

const HowWorks = () => {
    const data = [
        {
            img: "https://tailorboutiques.com/wp-content/uploads/2021/06/Pickup-boy-1-webp.webp",
            title: "Home pickup",
            description: "We provide doorstep services for your stitching needs and we send our consultants (Tailor) to your home or office. They help you with choosing new Designs for your clothes, taking perfect measurements and collecting fabric from you.",
        },
        {
            img: "https://tailorboutiques.com/wp-content/uploads/2021/06/thesuitwala-Online-tailor-webp.webp",
            title: "Stitching",
            description: "We have a team of experienced tailors and designers, all outfit will be stitched under experts guidance.",
        },
        {
            img: "https://tailorboutiques.com/wp-content/uploads/2021/06/pickup-boy-2-webp.webp",
            title: "Fast Deliver",
            description: "Post which the stitching happens at our Production House and then we get it delivered to you and if there will be any alteration required, We will redo again and redeliver it at your place.",
        }
    ];

    const containerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        padding: "20px",
    };

    const cardStyle = {
        width: "300px",  // Fixed card width
        height: "500px", // Fixed card height
        // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Card shadow
        borderRadius: "10px", // Rounded corners
        overflow: "hidden", // Prevent content overflow
        backgroundColor: "#fff", // Card background color
        textAlign: "center",
        padding: "10px",
    };

    const imgStyle = {
        width: "100%", // Make image fill the card's width
        height: "300px", // Fixed image height
        objectFit: "cover", // Ensure the image covers the area without distortion
    };

    const titleStyle = {
        color: "grey",
        margin: "10px 0", // Space around the title
    };

    const descriptionStyle = {
        padding: "0 10px", // Padding around the description
        fontSize: "14px",
        lineHeight: "1.5",
    };

    return (
        <div style={containerStyle}>
            {data.map((item, index) => (
                <div key={index} style={cardStyle}>
                    <img src={item.img} alt={item.title} style={imgStyle} />
                    <h2 style={titleStyle}>{item.title}</h2>
                    <p style={descriptionStyle}>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default HowWorks;
