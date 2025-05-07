
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Gift, ShoppingBag } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="flex flex-col gap-8">
        <section>
          <h1 className="text-3xl font-bold mb-2">Welcome to ReConnect</h1>
          <p className="text-muted-foreground mb-6">Your community marketplace for lost items, donations, and local help</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="pt-6">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">Lost & Found</h3>
                  <ShoppingBag className="text-blue-500" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Report or find lost items in your community</p>
                <div className="mt-4">
                  <Badge variant="secondary">12 recent items</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/lost-items">
                  <Button variant="outline" size="sm" className="w-full">
                    Browse Lost Items
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">Donations</h3>
                  <Gift className="text-green-500" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Give away items you no longer need</p>
                <div className="mt-4">
                  <Badge variant="secondary">8 available items</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/donations">
                  <Button variant="outline" size="sm" className="w-full">
                    Browse Donations
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="pt-6">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold">Help Requests</h3>
                  <Award className="text-purple-500" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Offer or request help from your community</p>
                <div className="mt-4">
                  <Badge variant="secondary">5 active requests</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/help-requests">
                  <Button variant="outline" size="sm" className="w-full">
                    View Help Requests
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Your ReCoin Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-amber-100 p-2 rounded-full">
                  <span className="text-amber-600 text-2xl">💰</span>
                </div>
                <span className="text-2xl font-bold text-green-600">145 ReCoins</span>
              </div>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>Used for: Redeeming rewards at partner stores</p>
                <p>Last earned: 20 ReCoins for donating books</p>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/rewards">
                <Button variant="outline" size="sm" className="flex gap-2">
                  View Rewards Store
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Earn More ReCoins</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span>Return a lost item</span>
                  <Badge className="bg-green-500">+30 ReCoins</Badge>
                </li>
                <li className="flex justify-between items-center">
                  <span>Donate an item</span>
                  <Badge className="bg-green-500">+20 ReCoins</Badge>
                </li>
                <li className="flex justify-between items-center">
                  <span>Complete a help request</span>
                  <Badge className="bg-green-500">+15 ReCoins</Badge>
                </li>
                <li className="flex justify-between items-center">
                  <span>Refer a friend</span>
                  <Badge className="bg-green-500">+25 ReCoins</Badge>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link to="/how-it-works">
                <Button variant="outline" size="sm">Learn more about ReCoins</Button>
              </Link>
            </CardFooter>
          </Card>
        </section>

        <section>
          <Card className="w-full">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold">Redeem Your ReCoins</h2>
                  <p className="text-muted-foreground">Use your ReCoins to get Amazon & Flipkart vouchers!</p>
                </div>
                <Link to="/rewards">
                  <Button>Go to Rewards Store</Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <Card className="border border-dashed">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <span className="text-blue-600 text-2xl">🛒</span>
                    </div>
                    <h3 className="font-semibold">Amazon Voucher</h3>
                    <p className="text-sm text-muted-foreground mt-1">Worth ₹500</p>
                    <Badge className="mt-2">200 ReCoins</Badge>
                  </CardContent>
                </Card>
                
                <Card className="border border-dashed">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                      <span className="text-yellow-600 text-2xl">🛍️</span>
                    </div>
                    <h3 className="font-semibold">Flipkart Voucher</h3>
                    <p className="text-sm text-muted-foreground mt-1">Worth ₹300</p>
                    <Badge className="mt-2">150 ReCoins</Badge>
                  </CardContent>
                </Card>
                
                <Card className="border border-dashed">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
                      <span className="text-red-600 text-2xl">☕</span>
                    </div>
                    <h3 className="font-semibold">Coffee Shop Voucher</h3>
                    <p className="text-sm text-muted-foreground mt-1">Free coffee</p>
                    <Badge className="mt-2">100 ReCoins</Badge>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
