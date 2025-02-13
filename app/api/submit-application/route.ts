import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const formData = await request.json()
  const webhookUrl =
    "https://discord.com/api/v10/webhooks/1339337352178569354/8GF5NuqSYHsCRD75f1DGJphPushjq-nnBKTJybLBWBjuawtPeNDZck56Un3_VGnOCqOA"

  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 })
  }

  const message = {
    embeds: [
      {
        title: "GLO's Mentorship Application",
        fields: [
          { name: "Full Name", value: formData.fullName },
          { name: "Phone Number", value: formData.phoneNumber },
          { name: "Email", value: formData.email },
          { name: "Instagram Username", value: formData.instagramUsername },
          { name: "Why Good Fit", value: formData.whyGoodFit },
        ],
        color: 5763719, // Green color
      },
    ],
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })

    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: "Failed to send message to Discord" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error sending message to Discord:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

