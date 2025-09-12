import { useMemo } from "react";
import SiteLayout from "@/components/app/SiteLayout";
import { Button } from "@/components/ui/button";
import { CalendarDays, CheckCircle2, Clock, FileText, GraduationCap, LayoutList, ListChecks } from "lucide-react";

export default function Index() {
  const tasks = useMemo(
    () => [
      { id: 1, title: "1. Biodata Lengkap & Mengikuti Akademi Dasar", percent: 80 },
      { id: 2, title: "2. Uji Kepribadian", percent: 0 },
      { id: 3, title: "3. Tes Kependidikan", percent: 0 },
      { id: 4, title: "4. Dokumen Pendukung", percent: 0 },
    ],
    [],
  );

  return (
    <SiteLayout>
      <section className="container py-10">
        {/* Top welcome + highlight cards */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-5 xl:col-span-4">
            <h2 className="mb-4 text-2xl font-bold tracking-tight">Data CV</h2>
            <p className="mb-6 text-sm text-muted-foreground">Langkah-langkah untuk memulai perjalanan karir Anda bersama Akademi Indonesia.</p>

            <div className="space-y-4">
              {tasks.map((t) => (
                <div key={t.id} className="rounded-2xl border bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="grid size-9 place-items-center rounded-lg bg-secondary text-primary">
                        <ListChecks className="size-5" />
                      </div>
                      <div>
                        <div className="font-medium leading-tight">{t.title}</div>
                        <div className="mt-1 text-xs text-muted-foreground">Selesaikan semua langkah dengan benar dan jelas</div>
                      </div>
                    </div>
                    <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-orange-700">{t.percent}%</span>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-gradient-to-r from-amber-300 via-orange-400 to-orange-600" style={{ width: `${t.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-7 xl:col-span-8">
            <div className="mb-6 flex items-baseline justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Assalamualaikum</div>
                <h1 className="text-3xl font-extrabold tracking-tight">Taufik Mulyana</h1>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm text-orange-800">
                <Clock className="size-4" />
                Subuh 03:40
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* Gradient highlight card */}
              <div className="relative col-span-12 overflow-hidden rounded-3xl p-6 text-white shadow-lg md:col-span-7" style={{
                background:
                  "radial-gradient(1200px 400px at 0% 0%, rgba(255,255,255,0.15), rgba(255,255,255,0) 40%), radial-gradient(600px 300px at 100% 0%, rgba(255,255,255,0.15), rgba(255,255,255,0) 40%), linear-gradient(135deg, #FDE68A 0%, #FDBA74 35%, #FB923C 70%, #F97316 100%)",
              }}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-white/90">Selasa, 10 Oktober 2023</div>
                    <h3 className="mt-1 text-2xl font-extrabold drop-shadow">Balqist!</h3>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm">Masa Berlaku Membership <span className="font-semibold">2023/2024</span></div>
                    <div className="mt-4">
                      <Button className="bg-white text-orange-700 hover:bg-white/90">Perpanjang Membership</Button>
                    </div>
                  </div>
                  <div className="hidden md:block translate-x-2">
                    <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                      <defs>
                        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#FDE68A" />
                          <stop offset="50%" stopColor="#FDBA74" />
                          <stop offset="100%" stopColor="#FB923C" />
                        </linearGradient>
                      </defs>
                      <path d="M20 100h120v10H20z" fill="url(#g)"/>
                      <circle cx="80" cy="60" r="34" stroke="white" strokeWidth="6" fill="none"/>
                      <rect x="74" y="32" width="12" height="20" rx="2" fill="white"/>
                      <path d="M80 56l10 24H70l10-24z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Membership alert card */}
              <div className="col-span-12 rounded-3xl border bg-white p-6 shadow-sm md:col-span-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-xl bg-rose-100 text-rose-600">
                      <CalendarDays className="size-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Masa Berlaku Membership</div>
                      <div className="text-sm text-muted-foreground">Akan berakhir dalam 12 hari lagi</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <Button className="bg-rose-500 hover:bg-rose-500/90">Perpanjang</Button>
                  <Button variant="outline">Detail</Button>
                </div>
              </div>

              {/* Latest academy */}
              <div className="col-span-12 mt-2">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Akademi Terbaru</h3>
                  <Button asChild variant="ghost" className="text-orange-700 hover:bg-amber-100">
                    <a href="/akademi">Lihat semua</a>
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
                      <div className="h-36 bg-gradient-to-br from-amber-200 via-orange-300 to-orange-500" />
                      <div className="space-y-2 p-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <GraduationCap className="size-4 text-orange-600" />
                          Akademi Dasar
                        </div>
                        <div className="font-semibold">Dasar-Dasar Pengetahuan Umum {i}</div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1"><CheckCircle2 className="size-3 text-emerald-500"/> 12 Modul</span>
                          <span className="inline-flex items-center gap-1"><FileText className="size-3"/> Sertifikat</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
