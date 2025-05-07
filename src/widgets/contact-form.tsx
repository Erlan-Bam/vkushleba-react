"use client";

import { RevealAnimation } from "@/shared/ui/reveal-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Loader2, CheckCircle, X } from "lucide-react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Имя должно содержать минимум 2 символа" }),
  email: z.string().email({ message: "Введите корректный email" }),
  subject: z
    .string()
    .min(5, { message: "Тема должна содержать минимум 5 символов" }),
  message: z
    .string()
    .min(10, { message: "Сообщение должно содержать минимум 10 символов" }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    emailjs
      .send(
        "service_c4rbl55", // Service ID
        "template_6246llh", // Template ID
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        "0n26Wb3qf9QLMOyde"
      )
      .then(() => {
        setShowSuccessModal(true);
        form.reset();
      })
      .catch((error) => {
        console.error("Ошибка при отправке сообщения:", error);
        alert("Произошла ошибка при отправке. Попробуйте позже.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <section className="py-8 sm:py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-background rounded-lg sm:rounded-xl shadow-sm p-4 sm:p-6 md:p-10">
          <RevealAnimation>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Напишите нам
            </h2>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Имя</FormLabel>
                        <FormControl>
                          <Input placeholder="Ваше имя" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Ваш email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Тема</FormLabel>
                      <FormControl>
                        <Input placeholder="Тема сообщения" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Сообщение</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ваше сообщение"
                          rows={6}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    "Отправить сообщение"
                  )}
                </Button>
              </form>
            </Form>
          </RevealAnimation>
        </div>
      </div>

      {/* Custom Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#faf9f5] rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center mb-2">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-xl font-medium">Сообщение отправлено</h3>
              </div>

              <p className="mb-6">
                Спасибо! Ваше сообщение успешно отправлено.
              </p>

              <Button
                onClick={() => setShowSuccessModal(false)}
                className="bg-[#b5651d] hover:bg-[#a05a19] text-white px-8"
              >
                Закрыть
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
