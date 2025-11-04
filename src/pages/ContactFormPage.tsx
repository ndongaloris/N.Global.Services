import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import emailjs from "emailjs-com";


interface ContactFormPageProps {
  onNavigate: (page: string) => void;
  formType: 'enroll' | 'quote' | 'apply';
}

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  language?: string;
  level?: string;
  schedule?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  interest?: string;
  experience?: string;
  message: string;
};

export default function ContactFormPage({ onNavigate, formType }: ContactFormPageProps) {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
  try {
    await emailjs.send(
      "service_hgl1v1s",
      "template_dclvsjl",
      data, // 👈 all your form fields
      "lCJuic6gpBo4AMmv_"
    );
    setIsSubmitted(true);
  } catch (err) {
    console.error("EmailJS error:", err);
    setIsSubmitted(false);
  } finally {
    setIsSubmitting(false);
  }
};

  const getTitle = () => {
    switch (formType) {
      case 'enroll':
        return t('form.enroll.title');
      case 'quote':
        return t('form.quote.title');
      case 'apply':
        return t('form.apply.title');
    }
  };

  const getSubtitle = () => {
    switch (formType) {
      case 'enroll':
        return t('form.enroll.subtitle');
      case 'quote':
        return t('form.quote.subtitle');
      case 'apply':
        return t('form.apply.subtitle');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--mint-cream)' }}>
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto text-center border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--cadet-gray)' }}>
                <CheckCircle2 className="h-10 w-10" style={{ color: 'var(--night)' }} />
              </div>
              <h2 className="mb-4" style={{ color: 'var(--gunmetal)', fontSize: '2rem' }}>
                {t('form.success')}
              </h2>
              <p className="mb-8" style={{ color: 'var(--davys-gray)', fontSize: '1.125rem' }}>
                We appreciate your interest in N Global Services. Our team will review your submission and get back to you within 24-48 hours.
              </p>
              <Button
                onClick={() => onNavigate('home')}
                style={{ backgroundColor: 'var(--gunmetal)', color: 'var(--mint-cream)' }}
              >
                {t('common.back')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: 'var(--mint-cream)' }}>
      <div className="container mx-auto px-6">
        <Button
          variant="ghost"
          onClick={() => onNavigate('home')}
          className="mb-6"
          style={{ color: 'var(--gunmetal)' }}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> {t('common.back')}
        </Button>

        <Card className="max-w-3xl mx-auto border-0 shadow-2xl">
          <CardHeader className="p-8">
            <h1 className="mb-2" style={{ color: 'var(--gunmetal)', fontSize: '2.5rem' }}>
              {getTitle()}
            </h1>
            <p style={{ color: 'var(--davys-gray)', fontSize: '1.125rem' }}>
              {getSubtitle()}
            </p>
          </CardHeader>

          <CardContent className="p-8 pt-0">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" style={{ color: 'var(--gunmetal)' }}>
                    {t('form.firstname')} <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Input
                    id="firstName"
                    {...register("firstName", { required: true })}
                    className="mt-2"
                    style={{ borderColor: errors.firstName ? 'red' : 'var(--cadet-gray)' }}
                  />
                  {errors.firstName && (
                    <span className="text-sm" style={{ color: 'red' }}>{t('form.required')}</span>
                  )}
                </div>

                <div>
                  <Label htmlFor="lastName" style={{ color: 'var(--gunmetal)' }}>
                    {t('form.lastname')} <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Input
                    id="lastName"
                    {...register("lastName", { required: true })}
                    className="mt-2"
                    style={{ borderColor: errors.lastName ? 'red' : 'var(--cadet-gray)' }}
                  />
                  {errors.lastName && (
                    <span className="text-sm" style={{ color: 'red' }}>{t('form.required')}</span>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" style={{ color: 'var(--gunmetal)' }}>
                    {t('form.email')} <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    })}
                    className="mt-2"
                    style={{ borderColor: errors.email ? 'red' : 'var(--cadet-gray)' }}
                  />
                  {errors.email && (
                    <span className="text-sm" style={{ color: 'red' }}>
                      {errors.email.type === 'pattern' ? t('form.email.invalid') : t('form.required')}
                    </span>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" style={{ color: 'var(--gunmetal)' }}>
                    {t('form.phone')} <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone", { required: true })}
                    className="mt-2"
                    style={{ borderColor: errors.phone ? 'red' : 'var(--cadet-gray)' }}
                  />
                  {errors.phone && (
                    <span className="text-sm" style={{ color: 'red' }}>{t('form.required')}</span>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="company" style={{ color: 'var(--gunmetal)' }}>
                  {t('form.company')}
                </Label>
                <Input
                  id="company"
                  {...register("company")}
                  className="mt-2"
                  style={{ borderColor: 'var(--cadet-gray)' }}
                />
              </div>

              {/* Language Learning Specific Fields */}
              {formType === 'enroll' && (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="language" style={{ color: 'var(--gunmetal)' }}>
                        {t('form.language')} <span style={{ color: 'red' }}>*</span>
                      </Label>
                      <Controller
                        name="language"
                        control={control}
                        rules={{ required: "language is required" }}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder={t('form.language')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="french">{t('form.language.french')}</SelectItem>
                              <SelectItem value="english">{t('form.language.english')}</SelectItem>
                            </SelectContent>
                          </Select>
                          )}
                      />
                      {errors.language && (
                      <p style={{ color: "red" }}>{errors.language.message}</p>
                    )}
                    </div>

                    <div>
                      <Label htmlFor="level" style={{ color: 'var(--gunmetal)' }}>
                        {t('form.level')} <span style={{ color: 'red' }}>*</span>
                      </Label>
                      <Controller
                        name="level"
                        control={control}
                        rules={{ required: "level is required" }}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder={t('form.level')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="beginner">{t('form.level.beginner')}</SelectItem>
                              <SelectItem value="intermediate">{t('form.level.intermediate')}</SelectItem>
                              <SelectItem value="advanced">{t('form.level.advanced')}</SelectItem>
                            </SelectContent>
                          </Select>)}
                      />
                      {errors.level && (
                      <p style={{ color: "red" }}>{errors.level.message}</p>
                    )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="schedule" style={{ color: 'var(--gunmetal)' }}>
                      {t('form.schedule')} <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <Controller
                      name="schedule"
                      control={control}
                      rules={{ required: "Schedule is required" }}
                      render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder={t('form.schedule')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekday">{t('form.schedule.weekday')}</SelectItem>
                            <SelectItem value="weeknight">{t('form.schedule.weeknight')}</SelectItem>
                            <SelectItem value="weekend">{t('form.schedule.weekend')}</SelectItem>
                            <SelectItem value="flexible">{t('form.schedule.flexible')}</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.schedule && (
                      <p style={{ color: "red" }}>{errors.schedule.message}</p>
                    )}
                  </div>
                </>
              )}

              {/* Web Development Specific Fields */}
              {formType === 'quote' && (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="projectType" style={{ color: 'var(--gunmetal)' }}>
                        {t('form.projecttype')} <span style={{ color: 'red' }}>*</span>
                      </Label>
                      <Controller
                        name="projectType"
                        control={control}
                        rules={{ required: "project type is required" }}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder={t('form.projecttype')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="business">{t('form.projecttype.business')}</SelectItem>
                              <SelectItem value="ecommerce">{t('form.projecttype.ecommerce')}</SelectItem>
                              <SelectItem value="portfolio">{t('form.projecttype.portfolio')}</SelectItem>
                              <SelectItem value="custom">{t('form.projecttype.custom')}</SelectItem>
                            </SelectContent>
                          </Select>)}
                      />
                      {errors.projectType && (
                      <p style={{ color: "red" }}>{errors.projectType.message}</p>
                    )}
                    </div>

                    <div>
                      <Label htmlFor="budget" style={{ color: 'var(--gunmetal)' }}>
                        {t('form.budget')} <span style={{ color: 'red' }}>*</span>
                      </Label>
                      <Controller
                        name="budget"
                        control={control}
                        rules={{ required: "budget is required" }}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder={t('form.budget')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="small">{t('form.budget.small')}</SelectItem>
                              <SelectItem value="medium">{t('form.budget.medium')}</SelectItem>
                              <SelectItem value="large">{t('form.budget.large')}</SelectItem>
                              <SelectItem value="enterprise">{t('form.budget.enterprise')}</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.budget && (
                      <p style={{ color: "red" }}>{errors.budget.message}</p>
                    )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="timeline" style={{ color: 'var(--gunmetal)' }}>
                      {t('form.timeline')} <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <Controller
                      name="timeline"
                      control={control}
                      rules={{ required: "timeline is required" }}
                      render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder={t('form.timeline')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">{t('form.timeline.urgent')}</SelectItem>
                            <SelectItem value="short">{t('form.timeline.short')}</SelectItem>
                            <SelectItem value="medium">{t('form.timeline.medium')}</SelectItem>
                            <SelectItem value="flexible">{t('form.timeline.flexible')}</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  {errors.timeline && (
                      <p style={{ color: "red" }}>{errors.timeline.message}</p>
                    )}
                  </div>
                </>
              )}

              {/* Opportunities Specific Fields */}
              {formType === 'apply' && (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="interest" style={{ color: 'var(--gunmetal)' }}>
                        {t('form.interest')} <span style={{ color: 'red' }}>*</span>
                      </Label>
                      <Controller
                        name="interest"
                        control={control}
                        rules={{ required: "interest is required" }}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder={t('form.interest')} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="career">{t('form.interest.career')}</SelectItem>
                              <SelectItem value="network">{t('form.interest.network')}</SelectItem>
                              <SelectItem value="partner">{t('form.interest.partner')}</SelectItem>
                              <SelectItem value="consult">{t('form.interest.consult')}</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    {errors.interest && (
                      <p style={{ color: "red" }}>{errors.interest.message}</p>
                    )}
                    </div>

                    <div>
                      <Label htmlFor="experience" style={{ color: 'var(--gunmetal)' }}>
                        {t('form.experience')} <span style={{ color: 'red' }}>*</span>
                      </Label>
                      <Controller
                        name="experience"
                        control={control}
                        rules={{ required: "Experience is required" }}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder={t("form.experience")} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="student">{t("form.experience.student")}</SelectItem>
                              <SelectItem value="mid">{t("form.experience.mid")}</SelectItem>
                              <SelectItem value="senior">{t("form.experience.senior")}</SelectItem>
                              <SelectItem value="executive">{t("form.experience.executive")}</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />

                      {errors.experience && (
                        <p style={{ color: "red" }}>{errors.experience.message}</p>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Message Field - Common for all forms */}
              <div>
                <Label htmlFor="message" style={{ color: 'var(--gunmetal)' }}>
                  {t('form.message')} <span style={{ color: 'red' }}>*</span>
                </Label>
                <Textarea
                  id="message"
                  {...register("message", { required: true })}
                  rows={6}
                  className="mt-2"
                  style={{ borderColor: errors.message ? 'red' : 'var(--cadet-gray)' }}
                  placeholder={
                    formType === 'enroll'
                      ? "Tell us about your language learning goals..."
                      : formType === 'quote'
                        ? "Describe your project in detail..."
                        : "Share your professional goals and what you're looking for..."
                  }
                />
                {errors.message && (
                  <span className="text-sm" style={{ color: 'red' }}>{t('form.required')}</span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: isSubmitting ? 'var(--davys-gray)' : 'var(--gunmetal)',
                    color: 'var(--mint-cream)',
                    fontSize: '1.125rem'
                  }}
                >
                  {isSubmitting ? t('form.submitting') : t('form.submit')}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
