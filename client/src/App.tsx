import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ParallaxProvider } from "react-scroll-parallax";
import { useFonts, useFontAwesome } from "./lib/fonts";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/services" component={Services} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useFonts();
  useFontAwesome();

  return (
    <ParallaxProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ParallaxProvider>
  );
}

export default App;
