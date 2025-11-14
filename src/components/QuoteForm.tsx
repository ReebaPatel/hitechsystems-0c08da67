import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must be less than 15 digits" })
    .regex(/^[0-9+\-\s()]+$/, { message: "Invalid phone number format" }),
  organization: z
    .string()
    .trim()
    .min(2, { message: "Organization name must be at least 2 characters" })
    .max(200, { message: "Organization must be less than 200 characters" }),
  serviceType: z
    .string()
    .min(1, { message: "Please select a service type" }),
  projectDetails: z
    .string()
    .trim()
    .min(10, { message: "Project details must be at least 10 characters" })
    .max(2000, { message: "Project details must be less than 2000 characters" }),
});

type FormData = z.infer<typeof formSchema>;

interface QuoteFormProps {
  children: React.ReactNode;
}

const QuoteForm = ({ children }: QuoteFormProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      serviceType: "",
      projectDetails: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Encode data for WhatsApp message
      const message = `*New Quote Request*%0A%0A` +
        `*Name:* ${encodeURIComponent(data.name)}%0A` +
        `*Email:* ${encodeURIComponent(data.email)}%0A` +
        `*Phone:* ${encodeURIComponent(data.phone)}%0A` +
        `*Organization:* ${encodeURIComponent(data.organization)}%0A` +
        `*Service Type:* ${encodeURIComponent(data.serviceType)}%0A%0A` +
        `*Project Details:*%0A${encodeURIComponent(data.projectDetails)}`;

      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/919819877289?text=${message}`;
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      form.reset();
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Request a Quote</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you within 24 hours with a detailed quote.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 98198 77289" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Organization Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="engineering-sitc">Engineering & SITC</SelectItem>
                      <SelectItem value="maintenance-operations">Maintenance & Operations</SelectItem>
                      <SelectItem value="specialized-services">Specialized Services</SelectItem>
                      <SelectItem value="power-systems">Power Systems (UPS, VFD, LED)</SelectItem>
                      <SelectItem value="fire-safety">Fire Safety Systems</SelectItem>
                      <SelectItem value="biogas-plants">Biogas & Biomethanation Plants</SelectItem>
                      <SelectItem value="hvac">HVAC & DG Sets</SelectItem>
                      <SelectItem value="it-surveillance">IT & Surveillance (CCTV, AV)</SelectItem>
                      <SelectItem value="custom-software">Custom Software Development</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Details *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please provide details about your project requirements, timeline, and any specific needs..."
                      className="min-h-[120px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Quote Request"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteForm;
