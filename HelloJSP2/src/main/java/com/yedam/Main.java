package com.yedam;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

interface/*규칙*/ Controller {
	public void exe();
}
class Sample implements Controller {
	@Override 
	public void exe() {
		System.out.println("Sample 클래스");
	}
	
}
