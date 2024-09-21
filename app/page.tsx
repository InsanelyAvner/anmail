"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function Component() {
  const [targetEmail, setTargetEmail] = useState("");
  const [senderAlias, setSenderAlias] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = async () => {
    try {
      const response = await fetch("https://api.proxynova.com/v1/send_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: targetEmail,
          from: senderAlias,
          subject: subject,
          message: message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Email sending failed");
      }

      alert("Email sent successfully!");
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-zinc-50 text-2xl">Anonymous Email Sender</CardTitle>
          <CardDescription className="text-zinc-400">Send emails anonymously with ease</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="target-email" className="text-sm font-medium text-zinc-200">
              Target Email
            </label>
            <Input
              id="target-email"
              placeholder="recipient@example.com"
              className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-500"
              value={targetEmail}
              onChange={(e) => setTargetEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="sender-alias" className="text-sm font-medium text-zinc-200">
              Sender Alias (name)
            </label>
            <Input
              id="sender-alias"
              placeholder="Anonymous"
              className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-500"
              value={senderAlias}
              onChange={(e) => setSenderAlias(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-zinc-200">
              Subject
            </label>
            <Input
              id="subject"
              placeholder="Message Subject"
              className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-500"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-zinc-200">
              Message (min 20 characters)
            </label>
            <Textarea
              id="message"
              placeholder="Type your message here"
              className="min-h-[100px] bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-zinc-50 text-zinc-900 hover:bg-zinc-200" 
            onClick={handleSendEmail}
          >
            Send Anonymous Email
          </Button>
        </CardFooter>
        <p className="text-center text-sm text-zinc-400 mb-5">© Copyright {new Date().getFullYear()} ANMail by Avner</p>
      </Card>
    </div>
  );
}
