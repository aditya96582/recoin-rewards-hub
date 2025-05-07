
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

export default function HelpRequests() {
  const { toast } = useToast();

  const handleSubmitRequest = () => {
    toast({
      title: "Help request submitted",
      description: "Your request has been posted to the community.",
    });
  };

  const handleOfferHelp = (name: string) => {
    toast({
      title: "Help offered",
      description: `You offered help to ${name}. They will be notified.`,
    });
  };

  const helpRequests = [
    {
      id: 1,
      name: "Mary S.",
      requestType: "Elderly Assistance",
      title: "Grocery Shopping Help",
      description: "Need help with weekly grocery shopping. Can't carry heavy items due to back issues.",
      location: "Oak Street",
      urgency: "medium",
      date: "May 7, 2025",
      image: "https://placehold.co/40x40/e2e8f0/1e293b?text=MS"
    },
    {
      id: 2,
      name: "Robert L.",
      requestType: "Tech Support",
      title: "Computer Setup Assistance",
      description: "Need help setting up my new computer and transferring files from old one.",
      location: "Pine Avenue",
      urgency: "low",
      date: "May 8, 2025",
      image: "https://placehold.co/40x40/e2e8f0/1e293b?text=RL"
    },
    {
      id: 3,
      name: "Jennifer K.",
      requestType: "Pet Care",
      title: "Dog Walking Help",
      description: "Looking for someone to walk my dog for the next 3 days while I recover from surgery.",
      location: "Maple Drive",
      urgency: "high",
      date: "May 6, 2025",
      image: "https://placehold.co/40x40/e2e8f0/1e293b?text=JK"
    },
  ];

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h1 className="text-3xl font-bold mb-2">Help Requests</h1>
      <p className="text-muted-foreground mb-6">Offer or request help from your community and earn ReCoins</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Active Help Requests</h2>
                <Badge variant="outline" className="bg-purple-500/10 text-purple-600">
                  Earn 15 ReCoins by helping someone
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {helpRequests.map(request => (
                <Card key={request.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div>
                        <img 
                          src={request.image} 
                          alt={request.name} 
                          className="w-12 h-12 rounded-full"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">{request.title}</h3>
                            <div className="text-sm text-muted-foreground">
                              Posted by {request.name} • {request.date}
                            </div>
                          </div>
                          <Badge 
                            className={
                              request.urgency === 'high' ? 'bg-red-500' : 
                              request.urgency === 'medium' ? 'bg-yellow-500' : 
                              'bg-blue-500'
                            }
                          >
                            {request.urgency === 'high' ? 'Urgent' : 
                             request.urgency === 'medium' ? 'Soon' : 
                             'Flexible'}
                          </Badge>
                        </div>
                        
                        <Badge variant="outline" className="mt-2">{request.requestType}</Badge>
                        
                        <p className="mt-2 text-sm">
                          {request.description}
                        </p>
                        
                        <div className="flex justify-between mt-3">
                          <div className="text-xs text-muted-foreground">
                            📍 {request.location}
                          </div>
                          <Button 
                            size="sm"
                            onClick={() => handleOfferHelp(request.name)}
                          >
                            Offer Help
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View More Requests</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Request Help</h2>
              <p className="text-sm text-muted-foreground">Ask your community for assistance</p>
            </CardHeader>
            <CardContent>
              <Alert className="mb-4">
                <AlertDescription>
                  Your request will be visible to community members who may offer their help.
                </AlertDescription>
              </Alert>
              
              <form className="space-y-4">
                <div>
                  <Label htmlFor="request-title">Title</Label>
                  <Input id="request-title" placeholder="Briefly describe what you need help with" />
                </div>
                <div>
                  <Label htmlFor="request-description">Details</Label>
                  <Input id="request-description" placeholder="Explain what you need help with" />
                </div>
                <div>
                  <Label htmlFor="request-location">Location</Label>
                  <Input id="request-location" placeholder="Where do you need help?" />
                </div>
                <div>
                  <Label htmlFor="request-type">Type of Help</Label>
                  <select id="request-type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                    <option value="">Select a category</option>
                    <option value="tech">Tech Support</option>
                    <option value="elderly">Elderly Assistance</option>
                    <option value="petcare">Pet Care</option>
                    <option value="transportation">Transportation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="request-urgency">Urgency</Label>
                  <select id="request-urgency" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
                    <option value="low">Flexible (Anytime in next week)</option>
                    <option value="medium">Soon (Next few days)</option>
                    <option value="high">Urgent (As soon as possible)</option>
                  </select>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleSubmitRequest}>
                Submit Help Request
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="mt-6">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Your Help Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Help requests fulfilled:</span>
                  <Badge variant="outline">3</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>ReCoins earned from helping:</span>
                  <Badge variant="outline" className="bg-green-500/10 text-green-600">45</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Community rank:</span>
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-600">Helper Level 2</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
