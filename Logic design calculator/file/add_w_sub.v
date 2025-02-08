module add_w_sub (
    input k,
    // k is control, to determine add or subtracr.. 0 = add , 1 = subtract
    input [2:0] a,
    input [2:0] b,
    output [3:0] sum
);
wire [2:0] d;
wire [2:0] e;
wire [3:0] c;
wire x,y,z;
//first, we get the 2's complement
two_comp tc1(a[2:0],d[2:0]);
two_comp tc2(b[2:0],e[2:0]);
fa fa1(d[0] , e[0]^k , k , c[0] , x);
fa fa2(d[1] , e[1]^k , x , c[1] , y);
fa fa3(d[2] , e[2]^k , y , c[2] , z);
assign c[3] = c[2]^y^z;  // y^z indicates the ov (overflow)
    // with this, we handle the overflow
// now we have sum, but in 2's comp form, we should convert it to signed magnitude
sign_mag sm1(c[3:0] , sum[3:0]);

endmodule