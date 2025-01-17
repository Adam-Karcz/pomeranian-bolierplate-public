import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Apps } from './App/Apps/Apps';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { CV } from './App/Components/CV/CV';
import { Blog } from './App/Blog/Blog';
import { FAQ } from './App/FAQ';
import { Callendar } from './App/Components/Callendar/Callendar';
import { TechStack } from './App/Components/TechStack/TechStack';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="techstack/*" element={<TechStack />} />
          <Route path="callendar/*" element={<Callendar />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="apps/*" element={<Apps />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="faq/*" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
