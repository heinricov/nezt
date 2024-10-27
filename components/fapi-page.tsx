"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Shield, Code, Check, Copy, CheckCircle } from "lucide-react";

export default function FapiPageSection() {
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
    alert("Terima kasih telah berlangganan!");
  };

  const codeExample = `
fetch('https://api.fakeapi.co/v1/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExample.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white dark:bg-black text-black dark:text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Fake API untuk Pengembangan Cepat
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Tingkatkan kecepatan pengembangan Anda dengan API palsu yang
                  realistis dan dapat disesuaikan.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white/10 text-white placeholder:text-gray-400"
                    placeholder="Masukkan email Anda"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit">Berlangganan</Button>
                </form>
                <p className="text-xs text-gray-400">
                  Daftar untuk mendapatkan update dan penawaran spesial.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-700">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black dark:text-white">
              Mulai Dengan Fake API
            </h2>
            <Card className="w-full max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle>Contoh Penggunaan</CardTitle>
                <CardDescription>
                  Salin kode di bawah ini untuk mulai menggunakan Fake API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                    <code>{codeExample}</code>
                  </pre>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={copyToClipboard}
                  >
                    {copied ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500">
                  Gunakan kode di atas untuk mengambil data pengguna dari Fake
                  API kami.
                </p>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Fitur Unggulan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Cepat & Responsif</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    API kami dioptimalkan untuk kecepatan dan responsivitas
                    tinggi.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <Shield className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Aman & Terpercaya</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Keamanan data Anda adalah prioritas utama kami.</p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <Code className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Mudah Diintegrasikan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Integrasi yang mulus dengan berbagai platform dan framework.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-black dark:text-white">
              Pilihan Paket
            </h2>
            <Tabs defaultValue="monthly" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="monthly">Bulanan</TabsTrigger>
                <TabsTrigger value="yearly">Tahunan</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic</CardTitle>
                      <CardDescription>Untuk proyek kecil</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold">Rp 99rb/bln</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" /> 1000
                          permintaan/hari
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" /> 5
                          endpoint kustom
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Pilih Paket</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-primary">
                    <CardHeader>
                      <CardTitle>Pro</CardTitle>
                      <CardDescription>Untuk tim dan startup</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold">Rp 299rb/bln</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" />{" "}
                          10,000 permintaan/hari
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" /> 20
                          endpoint kustom
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" />{" "}
                          Dukungan prioritas
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Pilih Paket</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>Untuk perusahaan besar</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold">Hubungi Kami</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" />{" "}
                          Permintaan tak terbatas
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" />{" "}
                          Endpoint kustom tak terbatas
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" />{" "}
                          Dukungan 24/7
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Hubungi Kami</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="yearly">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic</CardTitle>
                      <CardDescription>Untuk proyek kecil</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold">Rp 999rb/thn</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" /> 1000
                          permintaan/hari
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" /> 5
                          endpoint kustom
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Pilih Paket</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-primary">
                    <CardHeader>
                      <CardTitle>Pro</CardTitle>
                      <CardDescription>Untuk tim dan startup</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold">Rp 2,999rb/thn</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" />{" "}
                          10,000 permintaan/hari
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" /> 20
                          endpoint kustom
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" />{" "}
                          Dukungan prioritas
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Pilih Paket</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>Untuk perusahaan besar</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold">Hubungi Kami</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" />{" "}
                          Permintaan tak terbatas
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" />{" "}
                          Endpoint kustom tak terbatas
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-500" />{" "}
                          Dukungan 24/7
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Hubungi Kami</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Siap Untuk Memulai?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hubungi kami hari ini dan tingkatkan pengembangan Anda dengan
                  API palsu terbaik.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Masukkan email Anda"
                    type="email"
                  />
                  <Button type="submit">Hubungi Kami</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
