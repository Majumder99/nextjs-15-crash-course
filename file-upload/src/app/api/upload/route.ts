import { pinata } from "@/utils/config";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const files = data.getAll("file") as File[];
    let urls = [];

    for (const file of files) {
      const pinataRes = await pinata.upload.file(file);
      const url = await pinata.gateways.convert(pinataRes.IpfsHash);
      urls.push(url);
    }
    console.log("urls", urls);
    return NextResponse.json({ urls });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
