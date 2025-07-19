"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import InventorySection from "./components/InventorySection";
import FinanceSection from "./components/FinanceSection";

export default function TreasurerPage() {
  const [activeTab, setActiveTab] = useState("inventory");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">
        Treasurer Dashboard
      </h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory">
          <InventorySection />
        </TabsContent>

        <TabsContent value="finance">
          <FinanceSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
