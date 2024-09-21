'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export function AnonymousEmailSender() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-zinc-50">Anonymous Email Sender</CardTitle>
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
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="sender-alias" className="text-sm font-medium text-zinc-200">
              Sender Alias
            </label>
            <Input
              id="sender-alias"
              placeholder="Anonymous"
              className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-500"
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
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-zinc-200">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Type your message here"
              className="min-h-[100px] bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-500"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-zinc-50 text-zinc-900 hover:bg-zinc-200">
            Send Anonymous Email
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}