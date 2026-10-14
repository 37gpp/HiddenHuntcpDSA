require("dotenv").config();

const cloudinary = require("cloudinary").v2;

cloudinary.config();

async function testUpload() {
  try {
    console.log("Testing Cloudinary connection...");

    const result = await cloudinary.uploader.upload(
      "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      { folder: "hiddenhunt-test" }
    );

    console.log("Upload successful!");
    console.log("Public ID:", result.public_id);
    console.log("Image URL:", result.secure_url);
  } catch (error) {
    console.error("Cloudinary test failed.");
    console.error("Message:", error.message);
    console.error("HTTP code:", error.http_code);
    console.error("Details:", error.error);
  }
}

testUpload();