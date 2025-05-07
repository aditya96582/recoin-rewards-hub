
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

export default function LostItems() {
  const { toast } = useToast();

  const handleReport = () => {
    toast({
      title: "Report submitted",
      description: "Your lost item has been reported. We'll notify you if someone finds it.",
    });
  };

  const lostItems = [
    {
      id: 1,
      name: "Blue Wallet",
      location: "Central Park",
      date: "May 5, 2025",
      description: "Lost in the central pavilion area. Contains ID and credit cards.",
      category: "personal",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=Wallet"
    },
    {
      id: 2,
      name: "House Keys",
      location: "Main Street Bus Stop",
      date: "May 4, 2025",
      description: "Silver keychain with 3 keys. Lost at the downtown bus stop.",
      category: "personal",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=Keys"
    },
    {
      id: 3,
      name: "Black Backpack",
      location: "City Library",
      date: "May 3, 2025",
      description: "Nike backpack with laptop and books inside. Left in the reading room.",
      category: "bags",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=Bag"
    },
    {
      id: 4,
      name: "iPhone 15",
      location: "City Mall Food Court",
      date: "May 6, 2025",
      description: "Black iPhone with blue case. Screen has a small crack in the corner.",
      category: "electronics",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=Phone"
    }
  ];

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h1 className="text-3xl font-bold mb-2">Lost & Found</h1>
      <p className="text-muted-foreground mb-6">Report lost items or help return found items to earn ReCoins!</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Recently Reported Items</h2>
                <Badge variant="outline">Earn 30 ReCoins by returning an item</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All Items</TabsTrigger>
                  <TabsTrigger value="personal">Personal Items</TabsTrigger>
                  <TabsTrigger value="electronics">Electronics</TabsTrigger>
                  <TabsTrigger value="bags">Bags & Accessories</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-0">
                  <div className="space-y-4">
                    {lostItems.map(item => (
                      <Card key={item.id} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex">
                            <div className="w-24 h-24">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 flex-1">
                              <div className="flex justify-between">
                                <h3 className="font-medium">{item.name}</h3>
                                <Badge variant="outline">{item.category}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                                <span>📍 {item.location}</span>
                                <span>📅 {item.date}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="bg-muted/50">
                          <Button size="sm" className="w-full">I found this item</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="personal" className="mt-0">
                  <div className="space-y-4">
                    {lostItems.filter(item => item.category === 'personal').map(item => (
                      <Card key={item.id} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex">
                            <div className="w-24 h-24">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 flex-1">
                              <div className="flex justify-between">
                                <h3 className="font-medium">{item.name}</h3>
                                <Badge variant="outline">{item.category}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                                <span>📍 {item.location}</span>
                                <span>📅 {item.date}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="bg-muted/50">
                          <Button size="sm" className="w-full">I found this item</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="electronics" className="mt-0">
                  <div className="space-y-4">
                    {lostItems.filter(item => item.category === 'electronics').map(item => (
                      <Card key={item.id} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex">
                            <div className="w-24 h-24">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 flex-1">
                              <div className="flex justify-between">
                                <h3 className="font-medium">{item.name}</h3>
                                <Badge variant="outline">{item.category}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                                <span>📍 {item.location}</span>
                                <span>📅 {item.date}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="bg-muted/50">
                          <Button size="sm" className="w-full">I found this item</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="bags" className="mt-0">
                  <div className="space-y-4">
                    {lostItems.filter(item => item.category === 'bags').map(item => (
                      <Card key={item.id} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex">
                            <div className="w-24 h-24">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 flex-1">
                              <div className="flex justify-between">
                                <h3 className="font-medium">{item.name}</h3>
                                <Badge variant="outline">{item.category}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                                <span>📍 {item.location}</span>
                                <span>📅 {item.date}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="bg-muted/50">
                          <Button size="sm" className="w-full">I found this item</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Report a Lost Item</h2>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="item-name">Item Name</Label>
                  <Input id="item-name" placeholder="What did you lose?" />
                </div>
                <div>
                  <Label htmlFor="item-description">Description</Label>
                  <Input id="item-description" placeholder="Describe the item in detail" />
                </div>
                <div>
                  <Label htmlFor="item-location">Last Seen Location</Label>
                  <Input id="item-location" placeholder="Where do you think you lost it?" />
                </div>
                <div>
                  <Label htmlFor="item-date">Date Lost</Label>
                  <Input id="item-date" type="date" />
                </div>
                <div>
                  <Label htmlFor="item-category">Category</Label>
                  <select id="item-category" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                    <option value="">Select a category</option>
                    <option value="personal">Personal Items</option>
                    <option value="electronics">Electronics</option>
                    <option value="bags">Bags & Accessories</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="item-image">Upload Image (optional)</Label>
                  <Input id="item-image" type="file" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleReport}>Report Lost Item</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
