
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function Donations() {
  const { toast } = useToast();

  const handleDonateForm = () => {
    toast({
      title: "Donation posted",
      description: "Your item has been listed for donation. Thank you for contributing!",
    });
  };

  const donations = [
    {
      id: 1,
      name: "Children's Books",
      donor: "John D.",
      location: "Downtown",
      description: "A collection of 15 children's books, suitable for ages 5-8. In good condition.",
      category: "books",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=Books"
    },
    {
      id: 2,
      name: "Winter Clothes",
      donor: "Sarah M.",
      location: "North Side",
      description: "3 jackets and 2 sweaters, sizes M-L. Barely used and clean.",
      category: "clothing",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=Clothes"
    },
    {
      id: 3,
      name: "Study Table",
      donor: "Alex P.",
      location: "East Village",
      description: "Wooden study table in good condition. Must pick up.",
      category: "furniture",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=Table"
    },
    {
      id: 4,
      name: "Gaming Console",
      donor: "Michael T.",
      location: "West End",
      description: "Used gaming console with 2 controllers. Works perfectly.",
      category: "electronics",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=Console"
    }
  ];

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h1 className="text-3xl font-bold mb-2">Donations</h1>
      <p className="text-muted-foreground mb-6">Donate items you no longer need or find items others have donated</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Available Donations</h2>
                <Badge variant="outline" className="bg-green-500/10 text-green-600">Earn 20 ReCoins by donating an item</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {donations.map(item => (
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
                            <span>👤 {item.donor}</span>
                            <span>📍 {item.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-muted/50 flex justify-between">
                      <Button size="sm" variant="outline">Contact Donor</Button>
                      <Button size="sm">Request Item</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Load More Donations</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Donate an Item</h2>
              <p className="text-sm text-muted-foreground">Share items you no longer need with your community</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="donation-name">Item Name</Label>
                  <Input id="donation-name" placeholder="What would you like to donate?" />
                </div>
                <div>
                  <Label htmlFor="donation-description">Description</Label>
                  <Input id="donation-description" placeholder="Describe the item and its condition" />
                </div>
                <div>
                  <Label htmlFor="donation-location">Pickup Location</Label>
                  <Input id="donation-location" placeholder="Where can the item be picked up?" />
                </div>
                <div>
                  <Label htmlFor="donation-category">Category</Label>
                  <select id="donation-category" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                    <option value="">Select a category</option>
                    <option value="clothing">Clothing</option>
                    <option value="furniture">Furniture</option>
                    <option value="electronics">Electronics</option>
                    <option value="books">Books</option>
                    <option value="toys">Toys</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="donation-image">Upload Image (optional)</Label>
                  <Input id="donation-image" type="file" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleDonateForm}>List Item for Donation</Button>
            </CardFooter>
          </Card>
          
          <Card className="mt-6">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Why Donate?</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <div className="mt-1 text-green-500">✓</div>
                  <div>Help others in your community who need it</div>
                </li>
                <li className="flex gap-2">
                  <div className="mt-1 text-green-500">✓</div>
                  <div>Reduce waste and promote sustainability</div>
                </li>
                <li className="flex gap-2">
                  <div className="mt-1 text-green-500">✓</div>
                  <div>Earn 20 ReCoins for each donation</div>
                </li>
                <li className="flex gap-2">
                  <div className="mt-1 text-green-500">✓</div>
                  <div>Declutter your home and help someone in need</div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
